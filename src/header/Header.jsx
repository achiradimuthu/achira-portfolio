import React, { useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import Navigation from "../navigation/Navigation";
import GithubIcon from "../assets/icons/github.png";
import Menu_icon from "../assets/icons/menu-icon.png";
import Close_icon from "../assets/icons/close-icon.png";

function Header() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="main-div">
        <div className="content">
          <div>
            <span className="logo-span-blue">&lt;</span>
            <span className="logo-span-white">Achira</span>
            <span className="logo-span-blue">/</span>
            <span className="logo-span-white">Dimuthu</span>
            <span className="logo-span-blue">&gt;</span>
          </div>
          <div className="header-nav-large">
            <Navigation />
          </div>
          <div className="header-github-btn-large">
            <a
              href="https://github.com/achiradimuthu"
              target="_blank"
              className="github-btn"
            >
              <img
                src={GithubIcon}
                className="github-icon"
                alt="git-hub-icon"
              />
              <span className="github-btn-span">Github Profile</span>
            </a>
          </div>
          <div className="mobile-menu-icon">
            <img src={Menu_icon} alt="Menu-icon" onClick={openMenu} />
          </div>
          {open ? (
            <div className="mobile-menu-div">
              <img src={Close_icon} alt="Close-icon" onClick={closeMenu} />
              <ul>
                <li>
                  <Link smooth className="link" to="#about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link smooth className="link" to="#skills" onClick={closeMenu}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link smooth className="link" to="#education" onClick={closeMenu}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link smooth className="link" to="#projects" onClick={closeMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link smooth className="link" to="#contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
              <a href="https://github.com/achiradimuthu" target="_blank" onClick={closeMenu}>
                Github Profile
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
