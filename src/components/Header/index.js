import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    
    < div className="HeaderContainer">

  
    <div class="HPTitle">HARRY POTTER</div>
    <nav id="navbar">
          <ul class="barremenu">
            <li>
              <a to="History" href="HpHistory" class="button">History</a></li>
            <li>
              <a to="Quiz" href="QuizHP" class="button">Quiz</a></li>
            </ul></nav> 
      <div class="text">Click below to discover more about your fav characters</div>
     
    </div>
  );
};

export default Header;