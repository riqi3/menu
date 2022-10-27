import "./App.css";
import React from "react";
import { useState } from "react";
import Category from "./components/Category";
import Menu from "./components/Menu";
import { Data } from "./components/Data";

const allCategories = ["all", ...new Set(Data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(Data);
      return;
    }
    const newData = Data.filter((item) => item.category === category);
    setMenuItems(newData);
  };

  return (

      <main>
        <section className="menu section">
          <div className="title">
            <h1 id="title">Our Menu</h1>
            <div className="underline"></div>
          </div>
          <Category
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu data={menuItems} />                                                              
        </section>
      </main>
  );
}

export default App;
