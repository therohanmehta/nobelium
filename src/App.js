//https://jsonplaceholder.typicode.com/posts

import React from "react";
import "./App.css";
import { useContext, useEffect } from "react";
import { createContext, useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type == "Postdata") {
    return action.payload;
  }
};

const userData = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [Ele, setEle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((res) => {
        dispatch({
          type: "Postdata",
          payload: res,
        });
      });
  }, []);

  let value = {
    state,
    ele: Ele,
    setEle: setEle,
  };

  return (
    <div className="App">
      <userData.Provider value={value}>
        <POSTList />
        <POSTDETAIL />
      </userData.Provider>
    </div>
  );
}





function POSTList() {
  const { state, setEle } = useContext(userData);
  console.log(state);


//Function for showing the list of data that we stored in Ele by clicking the list

 function handlelist(ele) {
    setEle(ele);
  };

  return (
    <ul className="ul-list">
      {state.map((ele, index) => {
        return (
          <li onClick={() => handlelist(ele)}>
            Title-{index + 1} {ele.title} 👆
          </li>
        );
      })}
    </ul>
  );
};

const POSTDETAIL = () => {
  const data = useContext(userData);
  const list = data.ele;

  return (
    <ul className="ul-body">
      <h1>Content OF Clicked Item 🔽</h1>
      <li>ID- {list.id}</li>

      <li>User-ID{list.userId}</li>
      <li>Title - {list.title}</li>
      <li>Body- {list.body}</li>
    </ul>
  );
};
