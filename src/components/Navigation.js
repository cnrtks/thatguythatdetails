import React from "react";
import logo from "../assets/tgtdEMBLEM.svg";
import { Navbar, Nav } from "react-bootstrap";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.navbar = null;
  }

  componentDidMount() {
    let tlNav = gsap.timeline({ paused: true });
    tlNav.fromTo(
      this.navbar,
      { yPercent: -100 },
      {
        duration: 1,
        yPercent: 0,
      }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: this.navbar,
        start: "300vh",
        onEnter: () => {
          tlNav.play();
        },
      },
    });
  }

  render() {
    return (
      <Navbar
        ref={(navbar) => (this.navbar = navbar)}
        collapseOnSelect
        expand="lg"
        bg="dark"
        fixed="top"
        className="m-0 p-0"
      >
          <Navbar.Brand href="#home" className="brand">
            <img src={logo} style={{ width: "2em", height: "2em" }} />
            That Guy That Details
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
