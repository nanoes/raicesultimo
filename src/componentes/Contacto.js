import React from "react";
import Col from "react-bootstrap/Col";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import Container from "react-bootstrap/Container";

const Contacto = () => {
  return (
    <>
      <section id="contacto" className="section4">
        <Container className="text-center">
          <h1 className="title">Seguinos en redes</h1>
          <a href="https://www.facebook.com/raices.merlo/">
            <img className="redes" src={facebook} />
          </a>
          <a href="https://www.instagram.com/raicesmerlenses/">
            <img className="redes" src={instagram} />
          </a>
        </Container>
      </section>
    </>
  );
};

export default Contacto;
