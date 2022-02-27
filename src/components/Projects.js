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
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [skills] = React.useState([
    {
      id: 1,
      heading: "Languages",
      desc: "E-Commerse website is my first huge freelance project which is developed using React.js , Bootstrap, and Django and MySQL. This is my ever-rated freelance project with benifiets of all e-commerse applications",
      icons: [
        <FaReact />,
        <FaPython />,
        <FaDatabase />,
        <FaCss3 />
      ]
    },
    {
      id: 2,
      heading: "Schedule Manager",
      desc: "Shedule Manager is a website designed in React.js , this app have its own benifiets like scheduling todos, reminder-pops, notication system and firebase authentication",
      icons: [
        <FaReact />,
        <FaBootstrap />,
        <FaFire />
      ]
    },
    {
      id: 3,
      heading: "InstaClone",
      desc: "This app is superset of most rated social media app called 'Instagram' . This clone have its own features like Music section where users can get access to music,  and include some different UI Idea's",
      icons: [
        <FaReact />,
        <FaCss3 />
      ]
    }
  ]);
  return (
    <div className="projects">
      <div className="common">
        <h1 className="mainHeader">Projects</h1>
        <p className="mainContent">

          My Top 3 Projects as a Student and Freelance Web Developer.
        </p>
        <div className="commonBorder"></div>
      </div>

      <div data-aos="fade-up" className="Econtainer">
        {skills.map((info) => (
          <div className="Ecard">
            <div className="Econtent">
              <h2>{info.id}</h2>
              <h3>{info.heading}</h3>
              <p>
                <p><FaQuoteRight style={{ opacity: "0.7" }} /><br></br>{info.desc}</p>
                <a onClick={() => alert("Source code is temporary disabled by admin.")}>
                  <u>Get Source Code</u>
                </a>
              </p>
              <div className="Techs">
                {info.icons.map((icon) => (
                  <a href="">{icon}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};