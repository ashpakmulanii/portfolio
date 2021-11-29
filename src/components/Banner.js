import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaImages,
  FaYoutube,

  FaAngleDoubleDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const [state] = React.useState({
    title: "I am Ashpak Mulani",
    text: "Computer Science Student and ReactJS Expert \
    Welcome to my personal Portfolio",
    image:
      "https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/10.png?raw=true",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.linkedin.com/in/ashpak-mulani/">
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ashpakmulanii/">
                      <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/ashpak.mulani.3994/">
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AshpakMulanii">
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h3>Hey there,</h3>
                <h2>{state.title}</h2>
                <p>
                  {state.text} <Link to="/about">Know more</Link>
                </p>

                <div className="header__buttons">
                  <Link to="/prices" className="btn btn-outline">
                    <FaImages style={{ color: "#3fc4db" }} /> Gallery
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.youtube.com/channel/UCP39qVAtM507vfVvUOwrlHQ"
                    className="btn"
                  >
                    <FaYoutube className="play" />
                  </a>
                </div>
                <Link to="/about"><FaAngleDoubleDown className="downArrow" style={{color:"silver"}}/></Link>
              </div>
              
            </div>
            
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Banner;
