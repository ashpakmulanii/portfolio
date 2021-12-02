import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import { Projects } from "./components/Projects";
import MyServices from "./components/MyServices";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route exact path="/portfolio" element={
            <>
              <Banner />
              <About />
              <Services />
              <Projects />
              <MyServices />
              <Prices />
            </>
          } />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/myservices" element={<MyServices />}></Route>
          <Route exact path="/prices" element={<Prices />}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
