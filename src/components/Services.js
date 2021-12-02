import React from "react";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaGit,
  FaLinux,
  FaJs,
  FaWindows,
  FaJava,
  FaNodeJs,
  FaStar,
  FaPhp,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "TECH SKILLS",
    subHeading: "Tools and Technologies",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaReact className="commonIcons" />,
      heading: "Front-end",
      text: "React is an open-source JavaScript library used for frontend development, which was developed by Facebook. Its component-based library lets you build high-quality user-interfaces for web apps",
    },
    {
      id: 2,
      icon: <FaPython className="commonIcons" />,
      heading: "Back-end",
      text: "Django has a flexible and well-structured admin panel which is better than Laravel. Django also allows developers to reuse code from other projects",
    },
    {
      id: 3,
      icon: <FaDatabase className="commonIcons" />,
      heading: "Databases",
      text: "MySQL Database Service is a fully managed database service to deploy cloud-native applications. HeatWave, an integrated, high-performance query accelerator ...",
    },
    {
      id: 4,
      icon: <FaGit className="commonIcons" />,
      heading: "Version Control",
      text: "Git helps in managing the code changes and errors for projects with a large codebase. It makes it easy to stage changes and revert back to a specific version easily. It has is now being used to automate the process of deployment for an application",
    },
    {
      id: 5,
      icon: [
        <FaLinux className="commonIcons" />,
        <FaWindows className="commonIcons" />,
      ],
      heading: "Platforms",
      text: "Switching platforms and trying new linux distros was my elight hobby in middle of cs. That thing makes me able to know more about platforms and get work with anything.",
    },
    {
      id: 6,
      icon: [
        <FaJs className="commonIcons" />,
        <FaJava className="commonIcons" />,
        <FaPython className="commonIcons" />,
        <FaPhp className="commonIcons" />
      ],
      heading: "Languages",
      text: "I have ability to work with different programming languages like Java , JavaScript, Python and PHP",
    },
    {
      id: 7,
      icon: [<FaStar className="commonIcons" />],
      heading: "Coding Strategies",
      text: "I have pretty good knowledge of data structure and algorithms . DSA is the heart of programming and you can not ignore it while solving coding problems in competitive programming.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
