import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPlay,
  FaGit,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const [state] = React.useState({
    title: "I am Ashpak Mulani",
    text: "Hey there, i'm a Computer Science Student and ReactJS Expert \
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
                  <li>
                    <a href="https://github.com/ashpakmulani1101">
                      <FaGit className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <Link to="/prices" className="btn btn-outline">
                    Go To Gallery
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.youtube.com/channel/UCP39qVAtM507vfVvUOwrlHQ"
                    className="btn btn-smart"
                  >
                    <FaPlay className="play" />
                  </a>
                </div>
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
