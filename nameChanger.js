import { useState } from "react";

export function NameChanger() {
  const [readValue, updateValue] = useState("rohan");

  function changeName() {
    if (readValue == "Amit") {
      updateValue("Rajan");
    } else {
      updateValue("Amit");
    }
  }

  return (
    <div className="App">
      <h1>{readValue}</h1>
      <button onClick={changeName}> CLick mee</button>
    </div>
  );
}
