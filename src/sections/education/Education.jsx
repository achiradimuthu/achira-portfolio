import React from "react";
import "./Education.css";
import Mainimg from '../../assets/resources/hat-certificate.png';
import Bcuimg from '../../assets/resources/bcu-img.png';
import Jiatimg from '../../assets/resources/jiat-img.png';

function Education() {
  return (
    <div className="education-main-div" id="education">
      <div className="education-content">
        <div className="education-d1">
          <h1>Education</h1>
          <h3>
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </h3>
        </div>
        <div className="education-d2">
            <div className="ldiv">
                <img src={Mainimg} alt="Education" />
            </div>
            <div className="rdiv">
                <div className="card">
                    <img src={Bcuimg} alt="Birmingham City University logo" />
                    <div>
                        <span className="sp1">Birmingham City University</span>
                        <span className="sp2">BSc(Hons) Software Engineering (Top Up)</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Jiatimg} alt="Birmingham City University logo" />
                    <div>
                        <span className="sp1">Java Institute for Advanced Technology</span>
                        <span className="sp2">HND in Software Engineering</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
