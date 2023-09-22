import React from "react";

import { MenuList } from "../helper/MenuList";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Our menu</h1>
      <div className="menuList">
        {MenuList.map((item, key) => {
          return (
            <div className="menuItem">
              <div>
                <img src={item.image} alt="" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.price} ₺</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
