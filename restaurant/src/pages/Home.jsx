import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/hamburger.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>Burger 12</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          magnam?
        </p>
        <Link to="/">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
