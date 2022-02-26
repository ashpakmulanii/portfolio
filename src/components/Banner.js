import React from "react";
import {
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Banner = () => {
  const [state] = React.useState({
    text: "Welcome to my personal portfolio. This is all about my computer science journey and archievemnts and either services for you",
    image: "../images/12.jpg"
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  return (

    <div className="bannertext__container">
      <div data-aos="zoom-in" id="banner__icon">
        <FaCode id="facode" />
      </div>
      <div className="left__block">
        <div className="banner__heading"><h1 data-aos="flip-up" >Welcome to Portfolio<br />I'm Ashpak Mulani</h1>
        </div>
        <span className="ChangingText"></span>
        <div className="quote__box">
          <p>{state.text}</p>
        </div>
      </div>
      <div className="right__block">
        <div className="admin">
          <img className="admin__img" src={"https://github.com/ashpakmulanii/portfolio/blob/main/src/images/admin.JPG?raw=true"} />
          <div className="admin__info">
            <p style={{ fontSize: "16px" }}>Ashpak Ahmad Mulani</p>
            <p id="admin__role">- Full Stack Web Developer</p>
          </div>
        </div>
        <div className="two__btn">
          <Link to="/publications" className="show__more">Achievements</Link>
          <Link to="/fitness" className="explore__btn">Fitness & Lifestyle</Link>
        </div>
      </div>

    </div>



  );
};

export default Banner;
