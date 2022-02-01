import React from "react";
import { FaAlignJustify, FaFacebookF, FaGithub, FaInstagram, FaJs, FaJsfiddle, FaJsSquare, FaLinkedinIn, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Nav = () => {
  const [state, setState] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__title">
              <span className="Span">Apk</span>
              <span className="Span" style={{ color: "silver" }}>
                WebX
              </span>
            </div>
          </ul>
          <ul className="ln">
            <Link className="nav-btn-outline" style={{ fontWeight: "450", color: "white" }} to="/portfolio"
            >
              Home
            </Link>
            <Link className="nav-btn-outline" style={{ color: "#F9F7FC" }} to="/publications">
              Archievements
            </Link>
            <Link className="nav-btn-outline" to="/projects">
              Projects
            </Link>
            <Link className="nav-btn-outline" to="/services">
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
                <FaFacebookF class="nav_ico" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AshpakMulanii">
                <FaTwitter className="nav_ico" />
              </a>
            </li>
          </ul>

          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/portfolio" onClick={() => setState(!state)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/publications" onClick={() => setState(!state)}>Honors and Archievements</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setState(!state)}>Services</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setState(!state)}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setState(!state)}>Tech Skills</Link>
              </li>

              <li>
                <Link to="/projects" onClick={() => setState(!state)}>Projects</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify style={{ fontSize: "0.8rem" }} />
      </div>
    </nav>
  );
};

export default Nav;
