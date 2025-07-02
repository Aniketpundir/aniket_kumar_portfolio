import React from "react";
import "./About.css";
import profile_img from "../../assets/profileImag.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="About">
        <h1>About</h1>
        <div className="about-content">
          <div className="About-img">
            <img src={profile_img} />
          </div>
          <div className="About-text">
            <p>
              As a passionate and dedicated frontend developer, I have
              successfully built and deployed multiple projects using modern web
              technologies such as React, JavaScript, and Tailwind CSS,
              showcasing my ability to design and develop interactive,
              responsive, and scalable user interfaces. My focus lies in writing
              clean, maintainable code and creating seamless user experiences
              that align with modern UI/UX standards.
            </p>
            <p>
              I am deeply committed to continuous learning and upskilling,
              regularly exploring new libraries, frameworks, and best practices
              to stay ahead in the ever-evolving tech landscape. My goal is not
              only to improve my frontend expertise but also to expand my skill
              set across the full technology stack, enabling me to take on more
              comprehensive development roles.
            </p>
            <p>
              I am driven by a strong desire to contribute to impactful,
              real-world projects that solve meaningful problems and bring value
              to users. I aspire to work with innovative and collaborative
              teams, where I can both contribute effectively and grow as a
              developer. Ultimately, my long-term vision is to evolve into a
              full-stack developer, capable of architecting and delivering
              end-to-end web solutions with efficiency and creativity.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
