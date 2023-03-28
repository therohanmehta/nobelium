
import about from './CssFiles/AboutMe.module.css';
import './App.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../src/Components/Navbar'

function App() {
  
  return (
    <div>
       <Navbar/>

<h1 className={about.aboutHead}>About Me</h1>

<div className={about.rohan}>
      <img className={about.mainImg} src="https://cdns-images.dzcdn.net/images/cover/5adeb7e26590dcb7024ad731ed363a0c/264x264.jpg" alt="rohan's image" />
      
      <h2 className={about.name}>Rohan Kumar</h2>
      <h3 className={about.content}>Hey , welcome to the my portfolio website, I am from Dhanbad , Jharkhand . I have completed my Civil Engineering in year 2021 from JUT , Ranchi with an aggregate of 80.19%</h3>
</div>


<div className={about.cards}>

<div className={about.ageLocation}>
      <p >Age 24</p>
      <p>Location - Dhanbad, Jharkhand</p>

</div>

    <div className={about.cards1}>
        <h4>What are your skills</h4>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
    <div className={about.cards2}>
    <h4 >What are your hobbies</h4>
    <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
    <div className={about.cards3}>
    <h4 >What are your Learning</h4>
    <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
</div>
    </div>
  );
}

export default App;
