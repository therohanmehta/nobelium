import React, { useState } from 'react';
import '../App.css';

export default function TableShowAndUpdate() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [hobby, setHobby] = useState('');

  const handelNameChange = (e) => {
    setName(e.target.value);

    // console.log(name)
  };

  function handleAge(e) {
    setAge(e.target.value);
  }

  const handleHobby = (e) => {
    setHobby(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setData([
      ...data,
      {
        name,
        age,
        hobby,
        email,
      },
    ]);

    setAge('');
    setEmail('');
    setHobby('');
    setName('');

    // console.log(data);
  };

  const handelItemdelete = (email) => {
    const newData = data.filter((ele) => ele.email != email);

    setData(newData);
  };

  return (
    <div className="main-div">
      <div className="form-container">
        <div className="inputData">
          <form action="">
            <input
              value={name}
              onChange={handelNameChange}
              type="text"
              placeholder="Enter your Name"
            />
            <input
              value={age}
              onChange={handleAge}
              type="number"
              placeholder="Enter your Age"
            />
            <input
              value={hobby}
              onChange={handleHobby}
              type="text"
              placeholder="Enter your hobbies"
            />
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Enter Your E-mail"
            />

            <button onClick={handelSubmit}>ADD to list</button>
          </form>
        </div>
        <div className="liveData">
          <h3>Name- {name}</h3>
          <h3>Age- {age}</h3>
          <h3>Hobby- {hobby}</h3>
          <h3>Email- {email}</h3>
        </div>
      </div>

      <div className="table-container">
        {data.map((user) => {
          return (
            
            <div className='showData' style={{ display: 'flex' }}>
              <h2>{user.name}</h2>

              <h2>{user.age}</h2>

              <h2>{user.hobby}</h2>

              <h2>{user.email}</h2>

              <span onClick={() => handelItemdelete(user.email)}>❌DELETE</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
