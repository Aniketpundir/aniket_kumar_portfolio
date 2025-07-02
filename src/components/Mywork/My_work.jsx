import React from "react";
import "./My_work.css";
import google from "../../assets/google.png";
import rock from "../../assets/rock.png";
import shopper from "../../assets/shopper.png";
import trippy from "../../assets/trippy.png";
import zayka from "../../assets/zayka.png";

const mywork = [
  {
    id: 1,
    img: rock,
    view_link: "https://rock-paper-scissors-game12.netlify.app/",
    Github_link: "",
  },
  {
    id: 2,
    img: google,
    view_link: "https://googlee-geminii-clonee.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/Gemini_Clone",
  },
  {
    id: 3,
    img: trippy,
    view_link: "https://travel-with-trippy.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/Trippy-Travel",
  },
  {
    id: 4,
    img: shopper,
    view_link: "https://shoopper.netlify.app/",
    Github_link: "https://github.com/Aniketpundir/shopper-Ecommerce",
  },
  {
    id: 5,
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
          {mywork.map((items, index) => {
            return (
              <div className="card" key={index}>
                <img src={items.img} alt="Card" className="card-image" />
                <div className="button-group">
                  <a target="_blank" href={items.Github_link}>
                    <button className="card-button">GitHub</button>
                  </a>
                  <a target="_blank" href={items.view_link}>
                    <button className="card-button">View</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </>
  );
};

export default My_work;
