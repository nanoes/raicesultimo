import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import "../index.css";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar className="sticky-top navbar" expand="lg">
        <Link to={"/"} className="navbar-brand">
          <img
            style={{ height: "70px" }}
            src={logo}
            alt="logo"
            onClick={scrollToTop}
          ></img>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="about"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Nosotros
            </Link>
            <Link
              to="donar"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Donar
            </Link>
            <Link
              to="comoparticipar"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Como participar
            </Link>

            <Link
              to="contacto"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
