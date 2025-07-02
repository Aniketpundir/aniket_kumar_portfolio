import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_icon from "../../assets/menu_open.svg";

const Navbar = () => {
  const [setMenu, Menu] = useState();
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <>
      <div className="Navbar">
        <img className="menu_open" onClick={openMenu} src={menu_icon} />
        <div ref={menuRef} className="Navbar-container">
          <div className="navbar-left" onClick={closeMenu}>
            <h2>AK</h2>
          </div>
          <div className="navbar-middle">
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              href="#home"
            >
              <p>Home</p>
            </AnchorLink>
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              offset={50}
              href="#about"
            >
              <p>About</p>
            </AnchorLink>
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              offset={50}
              href="#skills"
            >
              <p>Skills</p>
            </AnchorLink>
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              offset={50}
              href="#work"
            >
              <p>My Work</p>
            </AnchorLink>
          </div>
          <div className="navbar-right">
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              offset={50}
              href="#contact"
            >
              <button>Connect With Me</button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
