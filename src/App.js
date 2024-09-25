import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import GetInTouch from './components/GetInTouch';
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Michael's Portfolio. All rights reserved.</p>
          <div className="social-media">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:mike@example.com">Contact</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
