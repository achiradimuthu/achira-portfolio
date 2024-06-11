import React from "react";
import "./Header.css";
import Navigation from "../navigation/Navigation";
import GithubIcon from "../assets/icons/github.png";

function Header() {
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
          <div>
            <Navigation />
          </div>
          <div>
            <a href="https://github.com/achiradimuthu" target="_blank" className="github-btn">
              <img src={GithubIcon} className="github-icon" alt="git-hub-icon" />
              <span className="github-btn-span">Github Profile</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
