import React from "react";
import { useState } from "react";
import { Data } from "./Data";

const Menu = () => {
  const [clicked, setClicked] = useState(1);

  const toggle = (index) => {
    setClicked(index);
  };

  return (
    <>
      <div className="App">
        <h1>Our Menu</h1>

        {Data.map((item, index) => {
          return (
            <>
              <div
                class="menu-container"
                onClick={() => toggle(index)}
                key={index}
              >
                <ul>
                  <li class="menu-tab">
                    <button >{clicked === index}All</button>
                  </li>
                  <li class="menu-tab">
                    <button>{clicked === index}Breakfast</button>
                  </li>
                  <li class="menu-tab">
                    <button>{clicked === index}Lunch</button>
                  </li>
                  <li class="menu-tab">
                    <button>{clicked === index}Shakes</button>
                  </li>
                </ul>
              </div>
              {clicked === index ? (
                        <div class="dropdown">
                          <p>{item.price}</p>
                        </div>
                      ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
