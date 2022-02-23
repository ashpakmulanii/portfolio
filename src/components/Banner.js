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
    image: "../images/12.jpg"
  });

  return (

    <div className="bannertext__container">
      <div className="left__block">
        <h1>Welcome to Portfolio</h1><h1> I'm Ashpak Mulani</h1>
        <span className="ChangingText"></span>
        <div className="quote__box">
          <p>{state.text}</p>
        </div>
      </div>
      <div className="right__block">
        <div className="admin">
          <img className="admin__img" src={require("../images/admin.JPG")} />
          <div className="admin__info">
            <p style={{ fontSize: "16px" }}>Ashpak Ahmad Mulani</p>
            <p style={{ fontSize: "14px", color: "silver" }}>- Full Stack Web Developer</p>
          </div>
        </div>
        <div className="two__btn">
          <Link to="/publications" className="show__more">Publications</Link>
          <Link to="/myservices" className="explore__btn">Explore Services</Link>
        </div>
      </div>
      {/* <img className="banner__bg" src={require("../images/banner(1).jpg")}></img> */}

    </div>



  );
};

export default Banner;
