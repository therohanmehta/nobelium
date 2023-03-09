
import './App.css';
import {User  } from "./card";

function App() {


        const User1 = {
            Name: "Amit",
            Designation: "Graphic Designer",
            description:
              "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.",
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
          };
        
          const User2 = {
            name: "Ruhi",
            description:
              "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups.",
            designation: "Singer",
            img: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          };
    
 
    return(
<>
<div id="firstCard">

<User name={User1.Name} img={User1.img} Designation={User1.Designation} description={User1.description}/>

</div>
<br />
<div id="secondCard">
    

<User name={User2.name} img={User2.img} Designation={User2.designation} description={User2.description}/>
</div>
</>

)
}

export default App;
