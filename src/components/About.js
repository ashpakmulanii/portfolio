import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Thanks for visiting my personal website.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Ashpak Mulani" },
    { id: 2, title: "Email:", text: "ashpakmulani1101@gmail.com" },
    { id: 3, title: "Phone:", text: "+917875735385" },
    {
      id: 4,
      title: "Linkedin",
      text: "https://www.linkedin.com/in/ashpak-mulani/",
    },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/10.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I consider myself as a very focused person. and i believe
                hardwork is they only option to be able to work smart.
              </div>
              <div className="about__info-p2">
                Computer science is the only thing that changed my life and
                vision of technology world.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
