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
      <div className="footer-img">
        <img className="header-logo" src={HeaderLogo} />
      </div>

      <div className="footer-content">
        <div className="location-content">
          <div>
          <img className="location-icon" src={Location} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam
            provident deleniti totam numquam modi unde aperiam nemo enim.
          </p>
        </div>

        <div className="desktop-combine">
          <div className="phone-content">
            <img src={Phone} />
            <p> +1-234-4321 </p>
          </div>

          <div className="email-content">
            <img src={Email} />

            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="about-content">
          <p> About Us </p>
          <p> Jobs </p>
          <p> Press </p>
          <p>Blog</p>
        </div>

        <div className="contact-content">
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
    </div>
  );
};

