import React from "react";
import "./App.css";
import Header from "./compunents/header/Header";
import Home from "./compunents/home/Home";
import About from "./compunents/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
};

export default App;
