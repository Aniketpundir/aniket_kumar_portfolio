// Skills.jsx
import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaKey, FaServer, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiC, SiCplusplus, SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const skillsName = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { id: 3, name: "Tailwind", icon: <RiTailwindCssFill className="icon tailwind" /> },
  { id: 4, name: "Bootstrap 5", icon: <FaBootstrap className="icon bootstrap" /> },
  { id: 5, name: "Javascript", icon: <IoLogoJavascript className="icon js" /> },
  { id: 6, name: "React", icon: <FaReact className="icon react" /> },
  { id: 7, name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { id: 8, name: "Express.js", icon: <SiExpress className="icon express" /> },
  { id: 9, name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
  { id: 10, name: "Mongoose", icon: <BiLogoMongodb className="icon mongoose" /> },
  { id: 11, name: "JWT Authentication", icon: <FaKey className="icon jwt" /> },
  { id: 12, name: "RESTful API", icon: <FaServer className="icon api" /> },
  { id: 13, name: "C", icon: <SiC className="icon c" /> },
  { id: 14, name: "C++", icon: <SiCplusplus className="icon cpp" /> },
  { id: 15, name: "Postman", icon: <SiPostman className="icon postman" /> },
  { id: 16, name: "GitHub", icon: <FaGithub className="icon github" /> },
  { id: 17, name: "Git", icon: <FaGitAlt className="icon git" /> },
  { id: 18, name: "Clean Architecture", icon: <BsStack className="icon stack" /> },
  { id: 19, name: "Problem Solving", icon: <GiBrain className="icon brain" /> },
  { id: 20, name: "Attention to Detail", icon: <MdOutlineRemoveRedEye className="icon eye" /> },
];

const education = [
  { id: 1, name: "B-Tech (Pursuing)", Batch: "2022 - 2026", college: "college of engineering roorkee (COER)" },
  { id: 2, name: "12th", Batch: "Complete in 2021", college: "Mahamana Malviya Inter College (Muzaffarnagar)" },
  { id: 3, name: "10th", Batch: "Complete in 2019", college: "Sunlike High School (Muzaffarnagar)" },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skill-list">
        <div className="skil-List">
          <h2>Skills</h2>
          <div className="for-display">
            {skillsName.map((items, index) => (
              <div className="skill-item" key={index}>
                {items.icon}
                <span>{items.name}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="education">
          <div className="education-content">
            <h2>Education</h2>
            <div className="for-display">
              <hr />
              {education.map((items, index) => (
                <>
                  <div className="education-list" key={index}>
                    <h3>{items.name}</h3>
                    <p>{items.Batch}</p>
                    <p>{items.college}</p>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Skills;