import React from "react";
import "./My_work.css";
import google from "../../assets/google.png";
import rock from "../../assets/rock.png";
import shopper from "../../assets/shopper.png";
import trippy from "../../assets/trippy.png";
import zayka from "../../assets/zayka.png";
import card from "../../assets/card.png";

const mywork = [
  {
    id: 1,
    title: "Rock Paper Scissors",
    description: "The Rock Paper Scissors game is a browser-based project using HTML, CSS, and JavaScript. It lets users play against the computer with real-time score tracking. JavaScript handles random moves and logic, while DOM manipulation enables instant, smooth updates without reloading, delivering a responsive and interactive experience.",
    img: rock,
    view_link: "https://rock-paper-scissors-game12.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/rock-paper-scissors-game12.",
  },
  {
    id: 2,
    title: "Card Matching Game",
    description: "The Card Matching Game is an engaging memory game developed using React, Tailwind CSS, and Hooks. Players flip cards to match pairs, enhancing focus and recall. React Hooks manage state and logic, while Tailwind ensures responsive design. This project strengthened my skills in component-based development and interactive UI design.",
    img: card,
    view_link: "https://card-matching-games.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/cards-matching-games",
  },
  {
    id: 3,
    title: "Gemini Clone",
    description: "The Gemini Clone is a responsive React-based web app that replicates core features of Google’s Gemini AI interface. It uses Google APIs for real-time interaction and React Router DOM for smooth navigation. This project enhanced my skills in API integration, component-based architecture, and building intelligent, user-friendly web applications.",
    img: google,
    view_link: "https://googlee-geminii-clonee.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/Gemini_Clone",
  },
  {
    id: 4,
    title: "Trippy Travel",
    description: "Trippy Travel is a modern travel website built with React, React Router DOM, and Context API. It offers smooth navigation, dynamic routing, and centralized state management. Featuring reusable components and a clean, responsive UI, it delivers an intuitive user experience for exploring travel destinations efficiently across devices.",
    img: trippy,
    view_link: "https://travel-with-trippy.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/Trippy-Travel",
  },
  {
    id: 5,
    title: "Shopper E-commerce",
    description: "Shopper E-commerce is a feature-rich online shopping platform built with React, React Router DOM, and Context API. It offers dynamic product listings, smooth navigation, and centralized cart management. The project emphasizes responsive UI, seamless user experience, and component-based design, enhancing my skills in modern web and state management.",
    img: shopper,
    view_link: "https://shoopper.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/shopper-Ecommerce",
  },
  {
    id: 6,
    title: "ZaykaXpress",
    description: "ZaykaXpress is a food delivery app built with React, React Router DOM, and APIs, featuring a clean UI inspired by Artech.in. It allows users to browse meals and place orders smoothly. The project showcases my skills in component management, real-time data handling, and building responsive, user-friendly web interfaces.",
    img: zayka,
    view_link: "https://zaykaxpress.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/zaykaExpress_food",
  },
];

const My_work = () => {
  return (
    <>
      <div id="work" className="my-work">
        <h1>My Works</h1>
        <div className="card-wrapper">
          {mywork.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <hr />
                <p className="card-desc">{item.description}</p>
                <div className="button-group">
                  <a target="_blank" href={item.Github_link} rel="noreferrer">
                    <button className="card-button">GitHub</button>
                  </a>
                  <a target="_blank" href={item.view_link} rel="noreferrer">
                    <button className="card-button">View</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default My_work;
