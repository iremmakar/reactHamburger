import React from "react";

import Logo from "../assets/hamburger.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1></h1>
        <form action="">
          <input type="text" placeholder="email" />
          <textarea type="text" placeholder="mesaj" />
          <button type="submit" className="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
