import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaFire,
  FaPython,
  FaReact,
  FaQuoteRight
} from "react-icons/fa";
import "./Projects.css";


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
              <p><FaQuoteRight style={{ opacity: "0.7" }} /><br></br>    E-Commerse website is my first huge freelance project which is
                developed using React.js , Bootstrap, and Django and MySQL. This is my ever-rated freelance project with benifiets of all e-commerse applications.</p>


              <a onClick={() => alert("Source code is temporary disabled by admin.")}>
                <u>Get Source Code</u>
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

        <div style={{}} className="Ecard">
          <div className="Econtent">
            <h2>02</h2>
            <h3>Schedule Manager</h3>
            <p>
              <p><FaQuoteRight style={{ opacity: "0.7" }} /><br></br>
                Shedule Manager is a website designed in React.js , this app have its own benifiets like scheduling todos, reminder-pops, notication system and firebase authentication</p>

              <a href="https://github.com/ashpakmulanii/schedule-manager">

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
              <a href="">
                <FaFire></FaFire>
              </a>
              <a>
                <FaDatabase />
              </a>
            </div>
          </div>
        </div>

        <div style={{}} className="Ecard">
          <div className="Econtent">
            <h2>03</h2>
            <h3>Instagram Clone</h3>
            <p>
              <p><FaQuoteRight style={{ opacity: "0.7" }} /><br></br>
                This app is superset of most rated social media app called 'Instagram' . This clone have its own features like Music section where users can get access to music,  and include some different UI Idea's </p>

              <a href="#">

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
