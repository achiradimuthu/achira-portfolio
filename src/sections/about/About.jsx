import React from "react";
import "./About.css";
import MyImg from "../../assets/resources/me.webp";

function About() {
  return (
    <div className="about-main-div" id="about">
      <div className="about-content">
        <div className="about-left-div">
          <h1>
            HI, I am <br />
            Achira Dimuthu
          </h1>
          <div className="about-h2-div">
            <span>I am a</span>
            <span className="sp">&nbsp;Software Engineer Undergraduate Student</span>
          </div>
          <h3>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </h3>
          <a href="https://drive.google.com/file/d/1ji_Y8sZgtOtLpW_23LxkgmhJIPNhN1JN/view?usp=sharing" target="_blank">
            Check Resume
          </a>
        </div>
        <div className="about-right-div">
            <img src={MyImg} alt="selt-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
