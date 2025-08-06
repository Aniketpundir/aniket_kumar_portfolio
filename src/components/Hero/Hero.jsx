import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profileImag.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Aniket_Kumar_Resume-1.pdf";

const Hero = () => {
  return (
    <>
      <div id="home" className="Hero-section">
        <div className="hero-section-content">
          <div className="hero-image">
            <img src={profile_img} />
          </div>
          <div className="hero-text-section">
            <div className="hero-text">
              <h1>I'm Aniket Kumar, Mern Stack developer</h1>
            </div>
            <div className="hero-button">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <button>Connect with me</button>
              </AnchorLink>
              <a href={resume} target="_blank">
                <button>My resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
