import React from "react";
import { useState } from "react";
import {
  FaImages,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [state, setState] = React.useState({
    title: "I am Ashpak Mulani",
    text: "Welcome to my personal Portfolio",
    fullText__Visibility: false,
    image:
      "https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/10.png?raw=true",
  });
  const [fullText] = useState("This is all about my computer science journey , personal life and Archievements. Thanks for Visiting to my Website.",
  );
  const [txt__visibility, setTxt__Visibility] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h3>Hey there,</h3>
                <h2>{state.title}</h2>
                <span className="ChangingText"></span>
                <p>
                  {state.text} {txt__visibility === true ? <p>{fullText}</p> : ""}<a onClick={() => setTxt__Visibility(!txt__visibility)}>Know more</a>
                </p>
                <div className="header__buttons">
                  <Link to="/prices" className="btn btn-outline">
                    <FaImages style={{ fontSize: "26px", position: "relative", marginBottom: "-8px", marginRight: "5px" }} /> <span id="galleryText"></span>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.youtube.com/channel/UCP39qVAtM507vfVvUOwrlHQ"
                    className="btn"
                  >
                    <FaYoutube className="play" />
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
    </div >
  );
};

export default Banner;
