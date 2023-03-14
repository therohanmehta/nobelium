import React, { useState, useEffect, useRef } from "react";
import "./App.css"
function App() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // update count of uncompleted tasks
    setCount(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      text: inputRef.current.value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" ref={inputRef} />
        <button className="AddTask" type="submit">Add Task</button>
      </form>
      <p>Uncompleted tasks: {count}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            {!task.completed && (
              <>
                <button className="complete" onClick={() => handleCompleteTask(task.id)}>
                  Complete
                </button>
                <button className="delete" onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
