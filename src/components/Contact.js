import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGit,
  FaFire,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <div className="navbar__title">
                  <FaFire
                    style={{
                      fontSize: "1.5rem",
                      color: "orange",
                    }}
                  ></FaFire>
                  <b>
                    <span style={{ color: "orange" }}>Ashpak</span>{" "}
                    <span style={{ color: "white" }}>Mulani</span>
                  </b>
                </div>
              </div>
              <p>
                “Winners embrace hard work. They love the discipline of it, the
                trade-off they’re making to win. Losers, on the other hand, see
                it as a punishment. And that’s the difference.”
              </p>
              <ul className="contactCircles">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
