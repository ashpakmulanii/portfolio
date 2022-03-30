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
    text: "“The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.”",
  });
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);


  return (
    <div className="bannertext__container">

      <div data-aos="zoom-in" id="banner__icon">
        <FaCode id="facode" />
      </div>

      <div className="left__block">
        <div className="banner__heading">
          <h1><span id="banner__name"> Welcome To,<br></br>Portfolio</span></h1>
        </div>

        <div className="text">
          <span className="ChangingText"></span>
        </div>

        <div className="quote__box">
          <p>{state.text}</p>
        </div>

      </div>
      <div className="right__block">
        <div className="admin">
          <img className="admin__img" src={require("../images/admin.jpg")} alt="admin" />
          <div className="admin__info">
            <p style={{ fontSize: "16px", color: "white" }}>Ashpak Ahmad Mulani</p>
            <p id="admin__role">- Full Stack Web Developer</p>
          </div>
        </div>
        <div className="two__btn">
          <Link to="/publications" className="show__more">Achievements</Link>
          <Link to="/fitness" className="explore__btn">Fitness & Lifestyle</Link>
        </div>
      </div>
    </div >
  );
};

export default Banner;
