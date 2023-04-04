import React, { useState } from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import { Link } from "react-router-dom";
import { taskListAtom } from './Atom';

function Home() {
const[data,setData]=useState('')
const[addTask , setAddTask ]= useRecoilState(taskListAtom)

function handleAddTask(){

setAddTask([...addTask,data])
setData('')
}
  return (
    <div>
      <input placeholder='Enter Task' value={data} type="text" style={{display:'block' ,width:"200px", height:"30px"}} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={handleAddTask} style={{padding:"5px",marginRight:"15px"}}>Add To TaskList</button>
      <Link to="/task">
      <button  style={{padding:"5px",margin:"15px"}}> Go To TaskList</button>
      </Link>
    </div>
  )
}

export default Home
