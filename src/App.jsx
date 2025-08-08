import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import My_work from "./components/Mywork/My_work";
import Contect from "./components/Contect/Contect";
import Footer from "./components/Footer/Footer";
import Certificate from "./components/certificate/Certificate";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <My_work />
      <Certificate />
      <Contect />
      <Footer />
    </>
  );
};

export default App;
