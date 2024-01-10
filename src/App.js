
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Bingo from "./Components/Bingo/Bingo";
import Card from "./Components/Card/Card";
import Preloader from "./Components/pre";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './style.css';
import "./App.css";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
