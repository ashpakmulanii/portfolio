import React from "react";
import { FaAlignJustify, FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__title">
              <FaFire
                style={{
                  fontSize: "2rem",
                  color: "orange",
                }}
              ></FaFire>
              <b>
                <span style={{ color: "orange" }}>Ashpak</span>{" "}
                <span style={{ color: "white" }}>Mulani</span>
              </b>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <Link exact to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Tech Skills</Link>
              </li>
              <li>
                <Link to="/prices">Fitness </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
