import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => (
  <div id="navbar">
    <Navbar>
      <Nav className="nav-content">
        <Nav.Link href="#about-me"><h4>About</h4></Nav.Link>
        <Nav.Link href="#resume-content"><h4>Resume</h4></Nav.Link>
        <Nav.Link href="#projects"><h4>Projects</h4></Nav.Link>
        <Nav.Link href="#contact-me"><h4>Contact</h4></Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export { NavigationBar };
