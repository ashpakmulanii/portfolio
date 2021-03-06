import React from "react";
import { FaAlignJustify, FaFacebookF, FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="home">
          <Link to="/portfolio"><FaHome id="HomeIcon" /></Link>
        </div>
        <ul className="navbar__left">
          <div className="navbar__title">
            <span className="Span">Apk </span> <p className="sublogo">JSDev</p>
          </div>
        </ul>
        <ul className="ln">
          <Link className="nav-btn-outline" style={{ fontWeight: "450", color: "white" }} to="/portfolio"
          >
            Home
          </Link>
          <Link className="nav-btn-outline" style={{ color: "#F9F7FC" }} to="/publications">
            Achievements
          </Link>
          <Link className="nav-btn-outline" to="/projects">
            Projects
          </Link>
          <Link className="nav-btn-outline" to="/skills">
            Skills
          </Link>
        </ul>

        <ul type="none" className="navbar__icons">
          <li>
            <a href="https://www.linkedin.com/in/ashpak-mulani/">
              <FaLinkedinIn className="nav_ico" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ashpakmulanii">
              <FaGithub className="nav_ico" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ashpakmulanii/">
              <FaInstagram className="nav_ico" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ashpak.mulani.3994/">
              <FaFacebookF className="nav_ico" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AshpakMulanii">
              <FaTwitter className="nav_ico" />
            </a>
          </li>
          <li>
            <a className="nav__btn" href="https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/public/CV1.pdf" download>Download Resume</a>
          </li>
        </ul>

        {state ? (
          <div className="navbar__right">
            <div className="upper_content">
              <ul className="ul__box">
                <li>
                  <Link to="/portfolio" onClick={() => setState(!state)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/publications" onClick={() => setState(!state)}>Achievements</Link>
                </li>
                <li>
                  <Link to="/projects" onClick={() => setState(!state)}>Projects</Link>
                </li>
              </ul>
              <ul className="ul__box">
                <li>
                  <Link to="/skills" onClick={() => setState(!state)}>Technical Skills</Link>
                </li>
                <li>
                  <Link to="/fitness" onClick={() => setState(!state)}>Fitness & Lifestyle</Link>
                </li>
              </ul>
            </div>
            <hr />
            <ul type="none" className="upper_content" style={{ justifyContent: "center" }}>
              <li>
                <a href="https://www.linkedin.com/in/ashpak-mulani/">
                  <FaLinkedinIn className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ashpakmulanii">
                  <FaGithub className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ashpakmulanii/">
                  <FaInstagram className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ashpak.mulani.3994/">
                  <FaFacebookF className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AshpakMulanii">
                  <FaTwitter className="nav_ico" />
                </a>
              </li>

            </ul>

          </div>
        ) : (
          ""
        )}

        <div className="toggle__box" onClick={() => setState(!state)}>
          {!state ? (<FaAlignJustify className="toggle__btn" />) : (
            <AiOutlineClose className="toggle__btn" />
          )}
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
