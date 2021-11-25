import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaFire,
  FaLockOpen,
  FaPython,
  FaReact,
  FaUserLock,
} from "react-icons/fa";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="common">
        <h1 className="mainHeader">Projects</h1>
        <p className="mainContent">
          My Top 3 Projects as a Student and Freelance Web Developer.
        </p>
        <div className="commonBorder"></div>
      </div>
      <div className="Econtainer">
        <div className="Ecard">
          <div className="Econtent">
            <h2>01</h2>
            <h3>E-Commerse Website</h3>
            <p>
              E-Commerse website is my first huge freelance project which is
              developed using React.js , Bootstrap, and Django and MySqL.
              <a href="#">
                <FaUserLock></FaUserLock>
                <u> Source Code</u>
              </a>
            </p>
            <div className="Techs">
              <a href="">
                <FaReact></FaReact>
              </a>
              <a href="">
                <FaPython></FaPython>
              </a>
              <a href="">
                <FaDatabase></FaDatabase>
              </a>
            </div>
          </div>
        </div>

        <div className="Ecard">
          <div className="Econtent">
            <h2>02</h2>
            <h3>Schedule Manager</h3>
            <p>
              Shedule Manager is a website designed in React.js . firstly i
              started with basic react app developed from a youtuber called
              'codewithharry' and then i put it into the next level.
              <a href="#">
                <FaLockOpen></FaLockOpen>
                <u> Source Code</u>
              </a>
            </p>
            <div className="Techs">
              <a href="">
                <FaReact></FaReact>
              </a>
              <a href="">
                <FaBootstrap></FaBootstrap>
              </a>
            </div>
          </div>
        </div>

        <div className="Ecard">
          <div className="Econtent">
            <h2>03</h2>
            <h3>Instagram Clone</h3>
            <p>
              Cloned instagram using most popular JavaScript liberary in 2021
              called React.js
              <a href="#">
                <FaUserLock></FaUserLock>
                <u> Source Code</u>
              </a>
            </p>
            <div className="Techs">
              <a href="#">
                <FaReact></FaReact>
              </a>
              <a href="#">
                <FaCss3></FaCss3>
              </a>
              <a href="#">
                <FaFire></FaFire>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
