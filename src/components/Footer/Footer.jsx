import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main-content">
          <div className="footer-left">
            <h1>Aniket Kumar</h1>
            <div className="some-links">
              <a
                href="https://www.linkedin.com/in/aniket-kumar-825363315/"
                target="_blank"
              >
                <p>LinkedIn</p>
              </a>
              <a href="https://github.com/Aniketpundir" target="_blank">
                <p>GitHub</p>
              </a>
              <a
                href="https://www.instagram.com/aniket__pundir_001/"
                target="_blank"
              >
                <p>Instagram</p>
              </a>
            </div>
          </div>
          <div className="footer-rigth">
            <h3>Thank you!! checking my portfolio</h3>
          </div>
        </div>

        <hr />
        <p className="copys">&copy; Aniket Kumar. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
