import React from "react";
import "./Skills.css";

const skillsName = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Tailwind",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "Bootstrap 5",
  },
  {
    id: 6,
    name: "Material UI",
  },
  {
    id: 7,
    name: "React",
  },
  {
    id: 8,
    name: "Node",
  },
  {
    id: 9,
    name: "C",
  },
  {
    id: 10,
    name: "C++",
  },
  {
    id: 11,
    name: "Postman",
  },
  {
    id: 12,
    name: "GitHub",
  },
  {
    id: 13,
    name: "Git",
  },
];

const education = [
  {
    id: 1,
    name: "B-Tech (Pursuing)",
    Batch: "2022 - 2026",
    college: "college of engineering roorkee (COER)",
  },
  {
    id: 2,
    name: "12th",
    Batch: "Complete in 2021",
    college: "Mahamana Malviya Inter College (Muzaffarnagar)",
  },
  {
    id: 3,
    name: "10th",
    Batch: "Complete in 2019",
    college: "Sunlike High School (Muzaffarnagar)",
  },
];
const Skills = () => {
  return (
    <>
      <div id="skills" className="skills">
        <div className="skill-list">
          <div className="skil-List">
            <h2>Skills</h2>
            <div className="for-display">
              {skillsName.map((items, index) => {
                return (
                  <ul key={index}>
                    <li>{items.name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="education">
            <div className="education-content">
              <h2>Education</h2>
              {education.map((items, index) => {
                return (
                  <div className="education-list" key={index}>
                    <h3>{items.name}</h3>
                    <p>{items.Batch}</p>
                    <p>{items.college}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;
