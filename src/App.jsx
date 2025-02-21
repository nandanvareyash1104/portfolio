import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AboutExt from "./components/AboutExt";
import Experience from "./components/Experiance";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        {/* <About /> */}
        <AboutExt />
        {/* <Experience /> */}
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
