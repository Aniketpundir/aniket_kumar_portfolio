import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import My_work from "./components/Mywork/My_work";
import Contect from "./components/contect/contect";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <My_work />
      <Contect />
      <Footer />
    </>
  );
};

export default App;
