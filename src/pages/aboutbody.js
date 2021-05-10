import React from "react";
import "../App.css";
import "../pages/about.css";

export default function AboutBody() {
  return (
    <>
      <div className="about">
        <div id="about" className="wrapper">
          <div className="static-container">
            <h1 className="title">ABOUT ME</h1>
            <div className="std">
              <div className="first-fold">
                <ul className="about-contact">
                  <li>
                    <a
                      href="/"
                      target="_blank"
                      title="Download Resume"
                      className="bt"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
                <p className="-purple sub-title">
                  I am a student and full stack developer and budding AIML
                  engineer.
                </p>
                <p className="-gray sub-sub-title">Graduating in 2023.</p>
              </div>
              <div className="about-grid">
                <h2>Main skills</h2>
                <div className="columns fluent">
                  <ul>
                    <li>
                      Frontend development,<br></br> Machine Learning
                    </li>
                    <li>
                      Competitive coding,<br></br>Strategic Thinking
                    </li>
                    <li>
                      React JS, JavaScript, HTML<br></br>CSS, APIs
                    </li>
                  </ul>
                </div>
                <h2>Tools and Languages</h2>
                <div className="columns tools">
                  <ul>
                    <li>React JS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                  </ul>
                  <ul>
                    <li>Python</li>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>OpenCV</li>
                  </ul>
                  <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>Java</li>
                  </ul>
                  <ul>
                    <li>Jupyter Notebook</li>
                    <li>MongoDB</li>
                    <li>Robo3T</li>
                    <li>Postman</li>
                  </ul>
                </div>
                <h2>Achievments</h2>
                <div className="columns tools">
                  <ul>
                    <li>CodeChef : 1 STAR</li>
                  </ul>
                  <ul>
                    <li>Hackerrank</li>
                    <li>Python : 5 STAR</li>
                    <li>Problem solving : 4 STAR</li>
                    <li>C lang : 2 STAR</li>
                  </ul>
                </div>
                <h2>Experience</h2>
                <div className="columns experience">
                  <ul>
                    <li>
                      <b className="-purple">
                        Web application development Intern
                      </b>
                      <br></br>
                      at Credex Technologies<br></br>
                      Jan - March 2021
                    </li>
                    <li>
                      <b className="-purple">
                        Virtual Internship (InsideSherpa)
                      </b>
                      <br></br>
                      at JP Morgan and Chase<br></br>
                      Nov 2019
                    </li>
                    <li>
                      <b className="-purple">
                        Virtual Internship (InsideSherpa)
                      </b>
                      <br></br>
                      at KPMG<br></br>
                      July 2020
                    </li>
                  </ul>
                </div>
                <h2>Position of Responsibilities</h2>
                <div className="columns experience">
                  <ul>
                    <li>
                      <b className="-purple">Core Team Member</b>
                      <br></br>
                      at CodeChef SRM NCR Chapter<br></br>
                      from April 2021
                    </li>
                    <li>
                      <b className="-purple">Member</b>
                      <br></br>
                      at SRM Literary Society<br></br>
                      from August 2020
                    </li>
                    <li>
                      <b className="-purple">Member</b>
                      <br></br>
                      at Innovation and Entrepreneurship development center SRM
                      <br></br>
                      from January 2021
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
