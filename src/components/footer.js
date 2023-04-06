import HeaderLogo from "./images/logo.svg";
import Location from "./images/icon-location.svg";
import Phone from "./images/icon-phone.svg";
import Email from "./images/icon-email.svg";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/square-twitter.svg";
import instagram from "./images/instagram.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <img className="header-logo" src={HeaderLogo} />
      <div className="footer-content">
        <div>
          <img className="location-icon" src={Location} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam
            provident deleniti totam numquam modi unde aperiam nemo enim.
          </p>
        </div>

        <div>
          <img src={Phone} />
          <p> +1-234-4321 </p>
        </div>

        <div>
          <img src={Email} />
          <p>example@fylo.com</p>
        </div>
      </div>

      <div className="footer-about">
        <p> About Us </p>
        <p> Jobs </p>
        <p> Press </p>
        <p>Blog</p>
      </div>

      <div className="footer-contact">
        <p> Contact Us </p>
        <p> Terms </p>
        <p> Privacy </p>
      </div>
      <div className="footer-icons">
        <img src={Facebook} />

        <img src={Twitter} />
        <img src={instagram} />
      </div>
    </div>
  );
};
