import React,{useState} from "react";
import '../Css/ImageChangerCss.css'

export function ImageChanger() {
const arr=["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
"https://p1.hiclipart.com/preview/326/868/1022/css3-badge-blue-and-white-css-icon-png-clipart.jpg","https://miro.medium.com/max/400/1*PWe4DmAE78BLD4SHpXizMw.png","https://dt-cdn.net/hub/mongo-db-logo.png","https://c8.alamy.com/comp/2F42FE5/orange-3d-html5-icon-isolated-on-white-background-2F42FE5.jpg"]
const [num,setNum]=useState(0)
function numberChange(){
if(num<arr.length-1){

  setNum(num+1)
}
else(
  setNum(0)
)

}

  return (
    <div>
     <img style={{height:'100px'}} src={arr[num]} alt=""/>
     <button className="changeImageBtn" onClick={numberChange}>Change Image</button>
    </div>
  );
}
