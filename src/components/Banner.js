import React from "react";
import {
  FaCode, FaQuoteLeft, FaQuoteRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BannerStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Banner = () => {
  const [state] = React.useState({
    que: "Looking for Web Developer ?",
    text: ""
  });
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])


  return (
    <div className="bannertext__container">
      <img className="home__img" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg?q=50&fit=contain&w=767&h=384&dpr=1.5" alt="homepage" />
      <div data-aos="zoom-in" id="banner__icon">
        <FaCode id="facode" />
      </div>
      <div className="left__block">
        <div className="banner__heading">
          <h1><span id="banner__name"> Website done right.</span></h1>
        </div>
        <div className="text">
        </div>
        <div className="quote__box">

          <FaQuoteLeft id="QuoteLeft" />
          <p>I'm a
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