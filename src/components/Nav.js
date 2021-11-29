import React from "react";
import { FaAlignJustify, FaLaptopCode, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__title">
              <b>
                <i>
                  <span className="Span">Ap</span>
                  <span className="Span" style={{ color: "silver" }}>
                    K
                  </span>
                </i>
              </b>
            </div>
          </ul>
          <Link className="ln btn nav-btn-outline" to="/">
            Home
          </Link>
          <Link className="ln btn nav-btn-outline" to="/prices">
            Fitness
          </Link>
          <Link className="ln btn nav-btn-outline" to="/services">
            Skills
          </Link>
          <Link className="ln btn nav-btn-outline" to="/myservices">
            Services
          </Link>

          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/">
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
                <Link to="/projects">Projects</Link>
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
