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
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaPython className="commonIcons" />,
      heading: "Back-end",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaDatabase className="commonIcons" />,
      heading: "Databases",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaGit className="commonIcons" />,
      heading: "Version Control",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: [
        <FaLinux className="commonIcons" />,
        <FaWindows className="commonIcons" />,
      ],
      heading: "Platforms",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: [
        <FaJs className="commonIcons" />,
        <FaJava className="commonIcons" />,
        <FaPython className="commonIcons" />,
        <FaNodeJs className="commonIcons" />,
      ],
      heading: "Languages",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 7,
      icon: [<FaStar className="commonIcons" />],
      heading: "Coding Strategies",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
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
