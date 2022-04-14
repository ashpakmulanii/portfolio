import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Navbar from "./components/Navbar";
import { SkillSet } from "./components/SkillSet";
import { Fitness } from "./components/Fitness";


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/portfolio" element={
            <>
              < Banner />
              <About />
              <Publications />
              <Projects />
            </>
          } />
          <Route exact path="/publications" element={<Publications />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/skills" element={<SkillSet />}></Route>
          <Route exact path="/fitness" element={<Fitness />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
