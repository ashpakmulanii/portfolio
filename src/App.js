import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Fitness__lifestyle from "./components/Fitness__lifestyle";
import { Projects } from "./components/Projects";
import My__Services from "./components/My__Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Technologies__Tools from "./components/Technologies__Tools";
import { Publications } from "./components/Publications";
import { HonorsAndAwards } from "./components/HonorsAndAwards";


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav />

        <Routes>
          <Route exact path="/portfolio" element={
            <>
              <Publications />
              <Banner />

              <HonorsAndAwards />
              <About />
              <Technologies__Tools />
              <Projects />
              <My__Services />
              <Fitness__lifestyle />
            </>
          } />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Technologies__Tools />}></Route>
          <Route exact path="/myservices" element={<My__Services />}></Route>
          <Route exact path="/prices" element={<Fitness__lifestyle />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
