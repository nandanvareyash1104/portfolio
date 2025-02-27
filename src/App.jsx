import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AboutExt from "./components/AboutExt";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <AboutExt />
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
