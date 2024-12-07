import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  Experience,
  Works,
  About,
  Contact,
  Navbar,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Experience />
        <Works />
        <About />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
