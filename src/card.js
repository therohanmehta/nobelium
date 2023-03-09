export function User(props) {
  
return (
   
      <div>
       <img src={props.img} alt="image" />
        <h5>{props.Designation}</h5>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      
   
  
  );
}
