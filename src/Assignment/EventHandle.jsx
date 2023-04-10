import { useState } from 'react';
import '../App.css'
export default function EventHandle() {
      const [data, setData] = useState([]);

      const [time, setTime] = useState(new Date().toLocaleString());

      function handleMouseOverH1() {
            setTime(new Date().toLocaleString());
            const newData = [...data, { event: 'Mouse In h1 ', time: time }];
            setData(newData);
      }
      function handleMouseOverH2() {
            setTime(new Date().toLocaleString());
            const newData = [...data, { event: 'Mouse In h2 ', time: time }];
            setData(newData);
      }
      function handleMouseOutH1() {
            setTime(new Date().toLocaleString());
            const newData = [...data, { event: 'Mouse Out h1 ', time: time }];
            setData(newData);
      }
      function handleMouseOutH2() {
            setTime(new Date().toLocaleString());
            const newData = [...data, { event: 'Mouse Out h2 ', time: time }];
            setData(newData);
      }
      console.log(data);
      return (
            <div className="TableGenerator">
                  <h1
                        onMouseOver={handleMouseOverH1}
                        onMouseOut={handleMouseOutH1}>
                        This is H1 Tag
                  </h1>
                  <h2
                        onMouseOver={handleMouseOverH2}
                        onMouseOut={handleMouseOutH2}>
                        This is H2 tag!
                  </h2>

                  <table style={{border:"1px solid black"}}>
                    <tr>
                        <th>event</th>
                        <th>time</th>
                    </tr>

                  {data.map((ele) => (
                      <tr>
                              <td>{ele.event}</td>
                              <td>{ele.time}</td>
                        </tr>
                         
                  ))}
                  </table>
            </div>
      );
}
