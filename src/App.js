import React,{useState} from "react";
import "./App.css"

const itemData = [
  { id: 1, name: 'Maggie(pc)', price: 10 },
  { id: 2, name: 'Milk(in L)', price: 20 },
  { id: 3, name: 'Rice(kg)', price: 30 },
];

export default function Billing() {
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState([{ item: '', quantity: '', price: 0 }]);
  const [submitted, setSubmitted] = useState(false);

  const handleAddItem = () => {
    setItems([...items, { item: '', quantity: '', price: 0 }]);
  };
  
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...items];
    if (name === 'item') {
      const selectedItem = itemData.find((item) => item.name === value);
      list[index]['price'] = selectedItem.price;
    }
    list[index][name] = value;
    setItems(list);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ customerName, items });
    setSubmitted(true);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + (item.quantity * item.price);
    },0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Customer Name:
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </label>
        </div>
        {items.map((item, index) => (
          <div key={index}>
            <label>
              Item:
              <select name="item" value={item.item} onChange={(e) => handleInputChange(e, index)}>
                <option value="">choose item</option>
                {itemData.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
            <label>
              Quantity:
              <input type="number" name="quantity" value={item.quantity} onChange={(e) => handleInputChange(e, index)} />
            </label>
            <div>
              <span>Price: {item.price}</span>
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>Add More Items</button>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <Table customerName={customerName} items={items} />
          <div>Total Bill: {calculateTotal()}</div>
        </div>
      )}
    </div>
  );
}

function Table(props) {
  return (
    <table>
     
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={index}>
            {index === 0 && (
              <td rowSpan={props.items.length}>
                {props.customerName}
              </td>
            )}
            <td>{item.item}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
