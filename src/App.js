import "./Styling/App.css";
// import React, { useRef } from 'react';
import { Navbar } from "./Components/Navbar";
import { LandingPage } from "./Components/LandingPage";
import { Skill } from "./Components/Sections/Skill";
import { Projects } from "./Components/Sections/Projects";
import { Social } from "./Components/Sections/Social";
import { Contact } from "./Components/Sections/Contact";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Skill />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
