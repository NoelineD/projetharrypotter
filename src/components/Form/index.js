import React from "react";
import "./index.css";



const Form = () => {


  return (
    
    <div className="Formcontainer">
    <form className="form">
      <div className="pageTitle title_form">Send us an owl mail here  </div>
      <div className="secondaryTitle title_form">Questions, requests, recommendations? Don't hesitate to send us your comments, we will be happy to answer you ! </div>
      <input type="text" className="name formEntry" placeholder="Name" />
      <input type="text" className="house formEntry" placeholder="Hogwarts House" />
      <input type="text" className="email formEntry" placeholder="Email"/>
      <textarea className="message formEntry" placeholder="Message"></textarea>
      <button className="submit formEntry" onclick="thanks()">Submit</button>
    </form>
  </div>
  );
};

export default Form;