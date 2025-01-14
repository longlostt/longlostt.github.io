import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}
