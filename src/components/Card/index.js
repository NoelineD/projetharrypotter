import { useState } from "react";
import "./index.css";
import Modale from "../Modal";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* # # # # # # # LA CARTE # # # # # # # */}
      <div
        className="card"
        onClick={() => {
          setShow(true);
        }}
        //  onMouseEnter={() => {
        //  setHover(true);
        //  }}

        //  classname= {hover === true && props.character.house === Griffindor ? (
        //   "Hovergriff" :null ) }

        //  classname= {hover === true && props.character.house === Slytherin ? (
        //   "Hoverslyt" :null ) }

        // classname= {hover === true && props.character.house === Ravenclaw ? (
        //  "Hoverraven" : null ) }

        //  classname= {hover === true && props.character.house === Hufflepuff ? (
        //  "Hoverhuff" :null ) }
      
      
      >


        <img src={props.character.image} alt="" />
        <span className="legend"> {props.character.name} </span>
      </div>

      {/* # # # # # # #  LA MODALE # # # # # # #  */}
      {show === true ? (
        <Modale character={props.character} setShow={setShow} />
      ) : null}




    </>
  );
};

export default Card;
