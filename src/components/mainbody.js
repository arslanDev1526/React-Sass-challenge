import React from "react";
import "./mainbody.scss";
import BodyImage from "./images/illustration-intro.png";

export const MainBody = () => {
  return (
    
    <div className="container">
      <img className="main-img" src={BodyImage} alt="no-img" />

      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <div>
      <button>Get Started</button>
      </div>
      </div>
    
  );
};
