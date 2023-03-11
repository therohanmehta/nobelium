import "./App.css";
import { ValueIncreseDecrease } from "./valueIncreaseDecrease";
import { NameChanger } from "./nameChanger";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function storeItems(event) {
    setText(event.target.value);
  }
  function addToTheList() {
    setList([...list, text]);
  }

  return (
    <>
      <h1>ToDo List Maker</h1>
      <input onChange={storeItems} />
      <br />
      <button onClick={addToTheList}>Click to add</button>
      <ol>
        {list.map((ele) => (
          <li>{ele}</li>
        ))}
      </ol>
      <hr />

      <h1>Click On the Button to increase or Decrease the Value</h1>
      <ValueIncreseDecrease />

      <hr />

      <NameChanger />
    </>
  );
}
