import React from "react";
import "./card.scss";

export const Card = (props) => {
  return (
    <>
         
   
    <div className="card-container">
       
    <img src={props.image} alt={props.alt} />
   
      <h2> {props.heading} </h2>
      <p>{props.paragraph}</p>
    </div>
    </>
  );
};
