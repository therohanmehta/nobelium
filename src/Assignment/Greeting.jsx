
import { useState } from 'react';
export default function App() {
      const greet = ['Happy Birthday', 'Happy Anniversary', 'Happy Diwali', "Happy Holi"];
      const [count, setCount] = useState(0);
      function changeText() {
            setCount(count + 1);
            if (count === 3){
                  setCount(0);
            }
      }
      return (
            <div >
                 <h1> {greet[count]} </h1>
                  <button onClick={changeText}>changing greet</button>
            </div>
      );
}
