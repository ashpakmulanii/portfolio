import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteRight,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [state, setState] = React.useState({
    text: "Welcome to my personal portfolio. This is all about my computer science journey and archievemnts and either services for you",
    fullText__Visibility: false,
    image: "../images/12.jpg"
  });

  return (
    <header>
      <div className="banner__container">
        <div className="bannertext__container">
          <h2>Welcome to ApkWebX</h2>
          <span className="ChangingText"></span>
          <div className="quote__box">
            <p><FaQuoteRight style={{ opacity: "0.7" }} /><br></br>{state.text}</p>
            <div class="quote__writer">
              <div className="admin">
                <img className="admin__img" src={require("../images/admin.JPG")} />
                <p style={{ fontSize: "16px" }}>Ashpak Mulani</p>
              </div>
              <span style={{ color: "silver", marginLeft: "62px", position: "absolute", marginTop: "-10px", }}>Web Developer</span>
            </div></div>
          <div className="two__btn">
            <Link to="/publications" className="show__more">Publications</Link>
            <Link to="/myservices" className="explore__btn">Explore Services</Link>
          </div>

        </div>
      </div>
      <div className="banner__img">
        <img src="https://www.mindinventory.com/blog/wp-content/uploads/2021/05/react-libraries.png" />
      </div>

    </header>

  );
};

export default Banner;
