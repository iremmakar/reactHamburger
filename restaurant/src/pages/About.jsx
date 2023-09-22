import React from "react";
import Logo from "../assets/hamburger.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptatem laboriosam doloremque nobis. Omnis eaque pariatur ea, at
          voluptate magni.
        </p>
      </div>
    </div>
  );
};

export default About;
