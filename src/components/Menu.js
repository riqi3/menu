import React from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Data, All, Breakfast, Lunch, Shakes } from "./Data";

const Menu = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <>

            return (
            <div className="App">
                <h1>Our Menu</h1>
                <div class="menu-container">
                    {Data.map((item, index) => {
                        return (
                            <>
                                <div class="wrap" onClick={() => toggle(index)} key={index}>
                                    <div class="menu-container">
                                        <ul>
                                            <li class="menu-tab">
                                                <div ><button>All</button></div>
                                                {/* {clicked === index ? (
                                                    <div class="dropdown">
                                                        {item.All}
                                                    </div>
                                                ) : null} */}
                                            </li>
                                            <li class="menu-tab">
                                                <div ><button>Break</button></div>
                                            </li>
                                            <li class="menu-tab">
                                                <div ><button>Lunch</button></div>
                                            </li>
                                            <li class="menu-tab">
                                                <div ><button>Shakes</button></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        );
                    })}

                </div>
            </div>
            );
        </>
    );
};

export default Menu;