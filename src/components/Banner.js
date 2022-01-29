import React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaImages,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [state, setState] = React.useState({
    title: "I am Ashpak Mulani",
    text: "Welcome to my personal Portfolio",
    fullText__Visibility: false,
    image: "../images/12.jpg"
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
                  {state.text} {txt__visibility === true ? <p>{fullText}</p> : ""}<a className="show__more" onClick={() => setTxt__Visibility(!txt__visibility)}>Know more</a>
                </p>
                <ul type="none" className="banner__icons">
                  <li>
                    <a href="https://www.linkedin.com/in/ashpak-mulani/">
                      <FaLinkedinIn className="banner_ico" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ashpakmulanii/">
                      <FaInstagram className="banner_ico" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/ashpak.mulani.3994/">
                      <FaFacebookF class="banner_ico" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AshpakMulanii">
                      <FaTwitter className="banner_ico" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCP39qVAtM507vfVvUOwrlHQ"

                    >
                      <FaYoutube className="banner_ico" />
                    </a>
                  </li>
                </ul>
                <div className="header__buttons">


                </div>

              </div>

            </div>

          </div>


        </div>
      </div>
    </div >
  );
};

export default Banner;
