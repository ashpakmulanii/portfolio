import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import Tilt from 'react-vanilla-tilt'
const My__Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    text: "Scroll down or nevigate to contact section and Reach me for enrollment of any kind of Website Development",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Single Page Application (SPA)",
      text: "Single Page Applications are a great tool for making incredibly engaging and unique experiences for your users. Some Single Page Application examples are like Gmail, Google Maps, AirBNB, Netflix, Pinterest, Paypal, and many more are using SPAs to build a fluid, scalable experience.",
    },
    {
      id: 2,
      heading: "Complete Website stack",
      text: "Django is arguably the most complete web development framework available. It's highly secure, fast, and scalable. So far i have mentioned to have React for front-end which is the best combination for full stack.",
    },
    {
      id: 3,
      heading: "Fitness Guide",
      text: "Fat lose and Muscle gaining tips. Calisthenics spacialist and Dieting expert",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <Tilt style={{}} className="services__box">
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default My__Services;
