import React from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link smooth className="link" to="#about">About</Link>
        </li>
        <li>
          <Link smooth className="link" to="#skills">Skills</Link>
        </li>
        <li>
          <Link smooth className="link" to="#education">Education</Link>
        </li>
        <li>
          <Link smooth className="link" to="#projects">Projects</Link>
        </li>
        <li>
          <Link smooth className="link" to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
