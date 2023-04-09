import React from "react";
import HeroImage from "./images/illustration-stay-productive.png";
import "./postmainbody.scss";

export const PostMainBody = () => {
  return (
    <>
      <div className="post-contianer">
        <img className="hero-image" src={HeroImage} />


<div  className="post-contianer-content">

        <h2> Stay productive, wherever you are </h2>

        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br />
          <br /> Securely share files and folders with friends, family and
          colleagues for live collaboration. No email attachments required.
        </p>

        <a href="#">
          {" "}
          See here Flyo Works{" "}
          <span>
            <img
              className="arrow-icon"
              src="https://timjn-fylo.netlify.app/static/media/icon-arrow.2491a46a96689783ec3c96bfb90aa30c.svg"
            />{" "}
          </span>{" "}
        </a>
      </div>
      </div>
    </>
  );
};
