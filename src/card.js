import React from "react";
import cardStyle from "./card.module.css";
export function Card() {
  const person = [
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    { image: "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg", name: "Name1", profession: "Back Dev", experience: "2yrs" },
    
  ];
  return (
   
       <div className={cardStyle.card}>
      {
          
          person.map((ele)=><div className={cardStyle.seperateCard}> 
        <img className={cardStyle.image} src={ele.image}/> 
        <h1 className={cardStyle.name}>{ele.name}</h1>
        <h4 className={cardStyle.prof}>{ele.profession}</h4> 
        <h5 className={cardStyle.exp}>{ele.experience}</h5>  
        
        </div>)
      }
      </div> 
        
    
  );
}


