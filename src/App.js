import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { Projects } from "./components/Projects";
// import My__Services from "./components/My__Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Technologies__Tools from "./components/Technologies__Tools";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";
import Services from "./components/Services";


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route exact path="/portfolio" element={
            <>
              < Banner />
              <Footer />
              <Publications />
            </>
          } />
          <Route exact path="/publications" element={<Publications />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Technologies__Tools />}></Route>
          <Route exact path="/myservices" element={<Services />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
