import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <div className="fixed-bottom">
      <Nav className="footer">
        <li className="rights">© 2020 lodrajoy.com. All rights reserved.</li>

        <li className="nav-item">
          <a className="nav-link icon" href="https://github.com/joyyehuda">
            <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link icon"
            href="https://www.facebook.com/joy.yehuda.5/"
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" color="black" />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link icon"
            href="https://www.instagram.com/joyyehuda/?hl=en"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" color="black" />
          </a>
        </li>
      </Nav>
    </div>
  );
};

export { Footer };
