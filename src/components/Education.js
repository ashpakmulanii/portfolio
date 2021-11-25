import React from "react";
import VanillaTilt from "vanilla-tilt";

export const Education = () => {
  VanillaTilt.init(document.querySelectorAll(".Ecard"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  });
  return (
    <div className="Econtainer">
      <div className="Ecard">
        <div className="Econtent">
          <h2>01</h2>
          <h3>Card One</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            voluptatum laborum at maxime vero nemo tenetur porro, fugiat ex
            corrupti!
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="Ecard">
        <div className="Econtent">
          <h2>02</h2>
          <h3>Card Two</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            voluptatum laborum at maxime vero nemo tenetur porro, fugiat ex
            corrupti!
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="Ecard">
        <div className="Econtent">
          <h2>03</h2>
          <h3>Card Three</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            voluptatum laborum at maxime vero nemo tenetur porro, fugiat ex
            corrupti!
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};
