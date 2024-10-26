import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
const Navs = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">about us</Nav.Link>
          <Nav.Link href="#home">explore food</Nav.Link>
          <Nav.Link href="#home">Review</Nav.Link>
          <Nav.Link href="#link">faq</Nav.Link>      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navs;