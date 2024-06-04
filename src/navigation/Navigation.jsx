import React from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link smooth className="link">About</Link>
        </li>
        <li>
          <Link smooth className="link">Skills</Link>
        </li>
        <li>
          <Link smooth className="link">Education</Link>
        </li>
        <li>
          <Link smooth className="link">Projects</Link>
        </li>
        <li>
          <Link smooth className="link">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
