import React from 'react'
import { taskListAtom } from './Atom'
import { useRecoilValue } from 'recoil'
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
function Task() {
    const finalTaskList=useRecoilValue(taskListAtom)
  return (
    <div>
      <h1>Tasks to do...</h1>
      <ol>
        {
            finalTaskList.map((ele,index)=>(
                <li key={index}>{ele}</li>
            ))
        }
      </ol>
      <Link to='/'>
      <button>Back To Add Task</button>
      </Link>
    </div>
  )
}

export default Task
