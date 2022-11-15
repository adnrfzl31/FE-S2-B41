import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';s
import Basket from "../assets/image/Basket.png";
import Image from "../assets/image/Logo1.png";
import Profile from "../assets/image/Profil1.png";


// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Navs2() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link to="/">
            <img
              alt=""
              src={Image}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end gap-3">
          <Nav className="me-auto"></Nav>
          <Nav.Link to="/" className="mx-3">
            <img
              alt=""
              src={Basket}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Nav.Link>
          <Nav.Link to="/">
            <img
              alt=""
              src={Profile}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navs2