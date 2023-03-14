import { useState } from "react";

export function ValueIncreseDecrease() {
  const [data, setData] = useState(1);

  function handleOnClickIncrease() {
    setData(data + 1);
  }
  function handleOnClickDecrease() {
    setData(data - 1);
  }
  return (
    <div>
      <h1> {data}</h1>

      <button onClick={handleOnClickIncrease}> Increase Count</button>
      <button onClick={handleOnClickDecrease}> Decrease Count</button>
    </div>
  );
}
