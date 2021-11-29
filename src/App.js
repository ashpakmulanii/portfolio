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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav />
                <Banner /> <About />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/myservices" element={<MyServices />}></Route>
          <Route exact path="/prices" element={<Prices />}></Route>
        </Routes>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
