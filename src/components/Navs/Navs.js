// Navs.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navs.css";
import logo from "./../../assets/logo.png";

const Navs = () => {
  return (
    <div className="sticky-wrapper">
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#explore">Explore Food</Nav.Link>
              <Nav.Link href="#review">Review</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="lastnav">01555186702</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
