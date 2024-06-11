import React from "react";
import "./Footer.css";
import Navigation from "../navigation/Navigation";
import Linkedin_img from "../assets/icons/social-media-icons/linkedin.png";
import Facebook_img from "../assets/icons/social-media-icons/facebook.png";
import Youtube_img from "../assets/icons/social-media-icons/youtube.png";
import Instagram_img from "../assets/icons/social-media-icons/instagram.png";

function Footer() {
  return (
    <div className="footer-main-div">
      <div className="footer-content">
        <span className="sp1">Achira Dimuthu</span>
        <Navigation />
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/achira-dimuthu-085ba7221/" target="_blank">
              <img src={Linkedin_img} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100009166270738" target="_blank">
              <img src={Facebook_img} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@adtech954" target="_blank">
              <img src={Youtube_img} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/achira_dimuthu/?hl=en" target="_blank">
              <img src={Instagram_img} alt="Instagram" />
            </a>
          </li>
        </ul>
        <span className="sp2">© {new Date().getFullYear()} Achira Dimuthu. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
