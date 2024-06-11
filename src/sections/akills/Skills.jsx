import React from "react";
import "./Skills.css";
import React_icon from "../../assets/icons/frontend-icons/react.png";
import Next_icon from "../../assets/icons/frontend-icons/nextjs.png";
import Redux_icon from "../../assets/icons/frontend-icons/redux.png";
import Html_icon from "../../assets/icons/frontend-icons/html.png";
import Css_icon from "../../assets/icons/frontend-icons/css.png";
import Js_icon from "../../assets/icons/frontend-icons/js.png";
import Bootstrap_icon from "../../assets/icons/frontend-icons/bootstrap.png";
import Tailwind_icon from "../../assets/icons/frontend-icons/tailwind-css.png";
import Jquery_icon from "../../assets/icons/frontend-icons/jquery.png";
import Nodejs_icon from "../../assets/icons/backend-icons/nodejs.png";
import Express_icon from "../../assets/icons/backend-icons/expressjs.png";
import Java_icon from "../../assets/icons/backend-icons/java.png";
import Springboot_icon from "../../assets/icons/backend-icons/springboot.png";
import Php_icon from "../../assets/icons/backend-icons/php.png";
import Laravel_icon from "../../assets/icons/backend-icons/laravel.png";
import Mysql_icon from "../../assets/icons/backend-icons/mysql.png";
import Mongodb_icon from "../../assets/icons/backend-icons/mongodb.png";
import Git_icon from "../../assets/icons/other-icons/git.png";
import Github_icon from "../../assets/icons/other-icons/github.png";
import Vscode_icon from "../../assets/icons/other-icons/vscode.png";
import Postman_icon from "../../assets/icons/other-icons/postman.png";
import Figma_icon from "../../assets/icons/other-icons/figma.png";

function Skills() {
  return (
    <div className="skills-main-div" id="skills">
      <div className="skills-content">
        <div className="skills-d1">
          <h1>Skills</h1>
          <h3>
            Here are some of my skills on which I have been working on for the
            past 3 years.
          </h3>
        </div>
        <div className="skills-d2">
          {/* frontend-technology */}
          <div className="skills-card">
            <h4>Frontend</h4>
            <div className="sub-div">
              <div className="skill">
                <img src={React_icon} alt="React-js" />
                <span>React js</span>
              </div>
              <div className="skill">
                <img src={Next_icon} alt="Next-js" />
                <span>Next js</span>
              </div>
              <div className="skill">
                <img src={Redux_icon} alt="Redux" />
                <span>Redux</span>
              </div>
              <div className="skill">
                <img src={Html_icon} alt="Html" />
                <span>Html</span>
              </div>
              <div className="skill">
                <img src={Css_icon} alt="Css" />
                <span>Css</span>
              </div>
              <div className="skill">
                <img src={Js_icon} alt="Javascript" />
                <span>Javascript</span>
              </div>
              <div className="skill">
                <img src={Bootstrap_icon} alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className="skill">
                <img src={Tailwind_icon} alt="Tailwind-css" />
                <span>Tailwind</span>
              </div>
              <div className="skill">
                <img src={Jquery_icon} alt="JQuery" />
                <span>JQuery</span>
              </div>
            </div>
          </div>
          {/* frontend-technology */}
          {/* backend-technology */}
          <div className="skills-card">
            <h4>Backend</h4>
            <div className="sub-div">
              <div className="skill">
                <img src={Nodejs_icon} alt="Node-js" />
                <span>Node js</span>
              </div>
              <div className="skill">
                <img src={Express_icon} alt="Express-js" />
                <span>Express js</span>
              </div>
              <div className="skill">
                <img src={Java_icon} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill">
                <img src={Springboot_icon} alt="Springboot" />
                <span>Springboot</span>
              </div>
              <div className="skill">
                <img src={Php_icon} alt="Php" />
                <span>PHP</span>
              </div>
              <div className="skill">
                <img src={Laravel_icon} alt="Laravel" />
                <span>Laravel</span>
              </div>
              <div className="skill">
                <img src={Mysql_icon} alt="Mysql" />
                <span>MySql</span>
              </div>
              <div className="skill">
                <img src={Mongodb_icon} alt="Mongodb" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          {/* backend-technology */}
          {/* other-technology */}
          <div className="skills-card">
            <h4>Other</h4>
            <div className="sub-div">
              <div className="skill">
                <img src={Git_icon} alt="Git" />
                <span>Git</span>
              </div>
              <div className="skill">
                <img src={Github_icon} alt="Github" />
                <span>Github</span>
              </div>
              <div className="skill">
                <img src={Vscode_icon} alt="Vscode" />
                <span>VS code</span>
              </div>
              <div className="skill">
                <img src={Postman_icon} alt="Postman" />
                <span>Postman</span>
              </div>
              <div className="skill">
                <img src={Figma_icon} alt="Figma" />
                <span>Figma</span>
              </div>
            </div>
          </div>
          {/* other-technology */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
