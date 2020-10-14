import React from "react";
import { NavigationBar } from "../components";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faSuitcase,
  faHandHoldingHeart,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Joy from '../assets/images/joy.png';

const Resume = () => {
  return (
    <div id="resume">
      <header>
        <NavigationBar />
      </header>

      <div className="main-content">
        <section id="about-me">
          <div id="about-me-body">
            <div className="about-me-pic">
              <img src={Joy} className="cropped" />
            </div>
            
            <div className="about-me-desc">
              <h1>JOY YEHUDA LODRA</h1>
              <h5>Software Engineer</h5>
              <p>
                An individual that is seeking an open-entry
                position that will further develop my skills
                as a good team player. Excellent initiative
                to accept new challenges, detail-oriented to
                work under pressure, and uses quality communication
                skills to collaborate effectively within a team
                environment.
              </p>
              <div className="icon-pos d-flex">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" color="black" />
                <FontAwesomeIcon className="icon" icon={faGithub} size="1x" color="black" />
                <FontAwesomeIcon className="icon" icon={faInstagram} size="1x" color="black" />
                <FontAwesomeIcon className="icon" icon={faFacebook} size="1x" color="black" />
              </div>

            </div>
          </div>
        </section>

        <section id="resume-content">
          <div id="resume-content-body">
            
            <div className="resume-content-block">
              <FontAwesomeIcon className="mb-4" icon={faGraduationCap} size="2x" color="grey" />
              <h5>Education</h5>
              <p>Edmonds College | Lynnwood, WA | Associate of Arts | 2017 - 2019</p>
              <p>University of Washington | Bothell, WA | Bachelor of Science
                in Computer Science and Software Engineering | 2019 - 2021</p>
            </div>
            
            <div className="resume-content-block">
              <FontAwesomeIcon className="mb-4" icon={faSuitcase} size="2x" color="grey" />
              <h5>Work Experience</h5>
              <p>Math Teacher's Assistant | Edmonds College | Lynnwood, WA | Nov 2018 - Jun 2019</p>
              <p>Frontend Developer Intern | KyFlex | Colombus, Ohio | Jul 2020 - Present</p>
            </div>

            <div className="resume-content-block">
              <FontAwesomeIcon className="mb-4" icon={faHandHoldingHeart} size="2x" color="grey" />
              <h5>Volunteer Experience</h5>
              <p>Youth Group Leader | The Living Christian Church, Shoreline, WA | Sep 2018 - Present</p>
            </div>

            <div className="resume-content-block">
              <FontAwesomeIcon className="mb-4" icon={faDownload} size="2x" color="grey" />
              <h5>Download My Resume in PDF</h5>
              <Button variant="outline-secondary">CLICK HERE</Button>
            </div>
          </div>
        </section>

        <section id="projects">
          <div id="projects-body">
            <h4>Projects</h4>
          </div>
        </section>

        <section id="contact-me">
          <div id="contact-me-body">
            <h4>Contact</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Resume };
