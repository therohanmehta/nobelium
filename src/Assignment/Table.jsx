import React,{useState} from "react";


export default function Table() {
  const multi=[1,2,3,4,5,6,7,8,9,10]
  const[num,setNum]=useState(1)

  return (
    <div className="TableGenerator">
      <h3>Random Table Generator</h3>
      <p>This is table of {num}</p>
      <button onClick={()=>{setNum(Math.ceil(Math.random()*100))}}>Click To generate</button>

      {
        multi.map((x)=><h5>{num} * {x} = {num*x} </h5>)
      }
    </div>
  );
}