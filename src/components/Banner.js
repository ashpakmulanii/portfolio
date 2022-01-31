import React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
  FaQuoteRight,
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
  const [shortText] = useState("This is all about my Computer Science Journey and Archivements.")
  const [txt__visibility, setTxt__Visibility] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <div className="banner__img">
                  <img src="https://www.mindinventory.com/blog/wp-content/uploads/2021/05/react-libraries.png" />
                </div>
                <h2>Welcome to <span className="Span">Apk</span><span style={{ color: "silver" }} className="Span">WebX</span></h2>
                <span className="ChangingText"></span>
                <div className="intro__text">
                  {txt__visibility === true ? (<p>{fullText}</p>) : (<p>{shortText}</p>)}
                  <p id="quote__box"><FaQuoteRight style={{ opacity: "0.7", paddingBottom: "5px" }} /><br></br>Success is neither magical nor mysterious. Success is the natural consequence of consistently applying the basic fundamentals.  - Jim Rohn</p>
                </div>

                <div className="two__btn">
                  <Link to="/about" className="show__more">About Me</Link>
                  <Link to="/about" className="explore__btn">Explore Portfolio</Link>
                </div>
                <ul type="none" className="banner__icons">
                  <li>
                    <a href="https://www.linkedin.com/in/ashpak-mulani/">
                      <FaLinkedinIn className="banner_ico" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/ashpakmulanii">
                      <FaGithub className="banner_ico" />
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

              </div>



            </div>

          </div>


        </div>
      </div>
    </div >
  );
};

export default Banner;
