import React from "react";
import { FaComment, FaEye, FaHeart } from "react-icons/fa";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Fitness and Lifestyle",
    text: "There are some clicks of my fitness progression and lifestyle",
  });
  return (
    <div class="card-container">
      <div className="common">
        <h1 className="mainHeader">{header.mainHeader}</h1>
        <p className="mainContent">{header.text}</p>
        <div className="commonBorder"></div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/1.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">Jun 21 2021</span>
          <h2>Calisthenics</h2>
          <p>
            Risk hai to ishq hai✌🙂 #Yoga+ #calisthenics #fitness #homeworkouts
            #natural
          </p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">
              150<sup>+</sup>
            </div>
            <div class="type">
              <FaHeart>Likes</FaHeart>
            </div>
          </div>
          <div class="stat border">
            <div class="value">700+</div>
            <div class="type">
              <FaEye></FaEye>
            </div>
          </div>
          <div class="stat">
            <div class="value">32</div>
            <div class="type">
              <FaComment />
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/2.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">20 Jun 2021</span>
          <h2>Viper Pose</h2>
          <p>#RKO👽 #theviper</p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">
              180<sup>+</sup>
            </div>
            <div class="type">
              <FaHeart>Likes</FaHeart>
            </div>
          </div>
          <div class="stat border">
            <div class="value">600+</div>
            <div class="type">
              <FaEye></FaEye>
            </div>
          </div>
          <div class="stat">
            <div class="value">29</div>
            <div class="type">
              <FaComment />
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="/images/3.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">4 days ago</span>
          <h2>Yoga Day</h2>
          <p>
            Train like a calisthenics.. Treat like desi... Stay natural... Be
            fit... Don't allow gyms to control your gains #Yoga_Day💌
            #Calisthenics forever✌ #fitness
          </p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">
              150<sup>+</sup>
            </div>
            <div class="type">
              <FaHeart>Likes</FaHeart>
            </div>
          </div>
          <div class="stat border">
            <div class="value">700+</div>
            <div class="type">
              <FaEye></FaEye>
            </div>
          </div>
          <div class="stat">
            <div class="value">32</div>
            <div class="type">
              <FaComment />
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/4.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">21 Jun 2021</span>
          <h2>Meditation</h2>
          <p>
            “Meditation is not about stopping thoughts, but recognizing that we
            are more than our thoughts and our feelings.”
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/5.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">6 Nov 2021</span>
          <h2>Gains</h2>
          <p>
            Consistency and Descipline is key of success. #consistency
            #discipline
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/6.JPG"></img>
        </div>
        <div class="card-text">
          <span class="date">4 days ago</span>
          <h2>Bulk</h2>
          <p>Energetic and Pumped !</p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">
              167<sup></sup>
            </div>
            <div class="type">
              <FaHeart>Likes</FaHeart>
            </div>
          </div>
          <div class="stat border">
            <div class="value">700+</div>
            <div class="type">
              <FaEye></FaEye>
            </div>
          </div>
          <div class="stat">
            <div class="value">21</div>
            <div class="type">
              <FaComment />
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src="/images/7.jpg"></img>
        </div>
        <div class="card-text">
          <span class="date">4 days ago</span>
          <h2>Nature</h2>
          <p>One touch of nature makes the whole world kin 💯</p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value">
              167<sup></sup>
            </div>
            <div class="type">
              <FaHeart>Likes</FaHeart>
            </div>
          </div>
          <div class="stat border">
            <div class="value">800+</div>
            <div class="type">
              <FaEye></FaEye>
            </div>
          </div>
          <div class="stat">
            <div class="value">25</div>
            <div class="type">
              <FaComment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
