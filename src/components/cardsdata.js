import React from "react";
import { Card } from "./card";
// import img1 from './images/logo.svg'
import "./card.scss";

let data = [
  {
    image:
      "https://timjn-fylo.netlify.app/static/media/icon-access-anywhere.2856c661b15230024a11eb4b089dd3f1.svg",
    heading: " Access your files, anywhere",
    paragraph:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    image:
      "https://timjn-fylo.netlify.app/static/media/icon-security.b6a932b6269cf10d3339e0a3d22c8b4e.svg",
    heading: "Security you can trust",
    paragraph:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    image:
      "https://timjn-fylo.netlify.app/static/media/icon-collaboration.6c80c0a4c84274f029eb51c36f603765.svg",
    heading: "Real-time collaboration",
    paragraph:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    image:
      "https://timjn-fylo.netlify.app/static/media/icon-any-file.fc9b91ba9923102f3aa45c19bc3244e6.svg",
    heading: "Store any type of file",
    paragraph:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export const CardsData = () => {
  return (
    <>
    <div className="padding-setter">
      {data.map((item) => {
        return (
          <Card
            id={item.id}
            image={item.image}
            heading={item.heading}
            paragraph={item.paragraph}
          ></Card>
        );
      })}
      </div>
    </>
  );
};
