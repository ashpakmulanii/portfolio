import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
// import My__Services from "./components/My__Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";
import Services from "./components/Services";
import { About } from "./components/About";
import Navbar from "./components/Navbar";
import { SkillSet } from "./components/SkillSet";


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
            </>
          } />
          <Route exact path="/publications" element={<Publications />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<SkillSet />}></Route>
          <Route exact path="/myservices" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
