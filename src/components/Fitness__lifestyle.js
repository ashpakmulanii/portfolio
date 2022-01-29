import React from "react";
import { FaComment, FaEye, FaHeart } from "react-icons/fa";
import "./Fitness__lifestyle.css";

const Fitness__lifestyle = () => {
  const [header] = React.useState({
    mainHeader: "Fitness and Lifestyle",
    text: "There are some clicks of my fitness progression and lifestyle",
  });
  const [state] = React.useState([
    {
      title: "Calisthenics",
      image: "https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/1.JPG?raw=true",
      date: "Jun 21 2021",
      desc: "Risk hai to ishq hai✌🙂 #Yoga+ #calisthenics #fitness #natural",
      stats: [170, 700, 32]
    },
    {
      title: "Viper Pose",
      image: "https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/6.JPG?raw=true",
      date: "20 Jun 2021",
      desc: "#RKO👽 #theviper",
      stats: [180, 600, 29]
    },
    {
      title: "Yoga Day",
      image: "https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/4.JPG?raw=true",
      date: "20 Jun 2021",
      desc: "Train like a calisthenics.. Treat like desi... Stay natural... Be  fit... Don't allow gyms to control your gains #Yoga_Day💌 #Calisthenics forever✌ #fitness",
      stats: [180, 500, 29]
    }
  ])
  return (
    <div class="card-container">
      <div className="common">
        <h1 className="mainHeader">{header.mainHeader}</h1>
        <p className="mainContent">{header.text}</p>
        <div className="commonBorder"></div>
      </div>
      {state.map((items) => (
        <div class="card">
          <div class="card-image">
            <img src={items.image} alt="img"></img>
          </div>
          <div class="card-text">
            <span class="date">{items.date}</span>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">
                {items.stats[0]}<sup>+</sup>
              </div>
              <div class="type">
                <FaHeart>Likes</FaHeart>
              </div>
            </div>
            <div class="stat border">
              <div class="value">{items.stats[1]}+</div>
              <div class="type">
                <FaEye></FaEye>
              </div>
            </div>
            <div class="stat">
              <div class="value">{items.stats[2]}</div>
              <div class="type">
                <FaComment />
              </div>
            </div>
          </div>
        </div>

      ))};
    </div>
  );
};

export default Fitness__lifestyle;
