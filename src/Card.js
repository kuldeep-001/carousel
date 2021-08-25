import React,{useState} from "react";

import Toggle from "./Note.js"

import Arrow from "./Arrow.png";

function Card(props){
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="note" onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
      <div className="logo">
        <div className="tag"><p>instore</p></div>
        <img src={props.img} alt="1mg" />
        <Toggle />
      </div>
      <div className="category">{props.category}</div>
      <div className="infodiv">{props.info}</div>
      <div className="infodesc"><span>{props.description} </span>
      <span className="learn">learn more</span>
      <div id="show">
      {isShown && (<img src={Arrow}/>)}
      </div>
      <div className="exp">{props.expirees}</div>
      </div>
      

    </div>
  )
}


  
  
  
export default Card;