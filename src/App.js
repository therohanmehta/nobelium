import {useState} from 'react'
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsMenuButtonWide } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import Menu  from "./menu";
function App() {
  const [menu ,setMenu]=useState(false)
  function visibleMenu(){
    setMenu(true)
  }
  function hideMenu(){
    setMenu(false)
  }
  
  return (
    <div className="App">
  <navbar className="mainNavbar" style={{ display: "flex" }}>
        <img className='webIcon'
          
          src="https://2.bp.blogspot.com/-EXdg7tSnwOk/W3aO1VMbOsI/AAAAAAAAA7c/TGzElpLzolIYWwmXhz4mCYxHLZQIKCnpACLcBGAs/s1600/mylogo.jpg"
          alt=""
        />
        <ul className="navIcons">
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>

       { menu==true? <Menu/> : ""}
        
        <button className="loginBtn">Login</button>
        <button className="signBtn">Signup</button>
       
        {menu==false? <button onClick={visibleMenu} className="visibleMenu">
      <GiHamburgerMenu/></button> : <button className="hideMenu" onClick={hideMenu}><ImCross/></button>
        }
      </navbar>

      
    </div>
  );
}

export default App;
