import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import { Projects } from "./components/Projects";
import My__Services from "./components/My__Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Technologies__Tools from "./components/Technologies__Tools";
import { Publications } from "./components/Publications";


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

              <Publications />
              <About />
              <Technologies__Tools />
              <Projects />
              <My__Services />
            </>
          } />
          <Route exact path="/publications" element={<Publications />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Technologies__Tools />}></Route>
          <Route exact path="/myservices" element={<My__Services />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
