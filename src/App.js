import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Task from './component/Task';
import Home from './component/Home';




function App() {
  

  return (
<div>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/task' element={<Task/>}/>
</Routes>

</div>
  
  );
}

export default App;


