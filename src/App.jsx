import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="shop">
        <Shop />
      </div>

      <Collections />

      <div id="features">
        <Features />
      </div>

      <div id="products">
        <Products />
      </div>
    </>
  );
};

export default App;
