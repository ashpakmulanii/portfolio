import React from "react";
import {
  FaQuoteLeft, FaReact
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BannerStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Banner = () => {
  const [state] = React.useState({
    text: ""
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="bannertext__container">
      <div data-aos="zoom-in" id="banner__icon">
        <FaReact id="facode" />
      </div>
      <div className="left__block">
        <div className="banner__heading">
          <h1><span id="banner__name"> Hello ✌️,<br></br>I'm Ashpak
          </span></h1>
        </div>
        <div className="text">
        </div>
        <div id="quote__box">

          <FaQuoteLeft id="QuoteLeft" />
          <p>A
            <span className="ChangingText"></span><br></br>
            from Pandharpur. I enjoy building everything from small buisness sites to rich interactive web apps. If you are buisness seeking a web present or an employer looking to hire you can get in touch with me here.</p>
        </div>
      </div>
      <div className="right__block">
        <div className="admin">
          <img className="admin__img" src={require("../images/admin.jpg")} />
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
    </div >



  );
};

export default Banner;