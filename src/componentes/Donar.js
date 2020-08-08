import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Row";
import donar from "../images/donation.svg";
const Donar = () => {
  return (
    <>
      <section id="donar" className="section2">
        <h1 className="title"></h1>
        <Container>
          <Jumbotron className="text-center">
            <Card.Img src={donar} variant="top" className="icon" />
            <h1>#QuieroDonar</h1>
            <p>
              Ayudanos a ayudar, hace tu aporte con el monto que elijas desde
              Mercado Pago. Los habitantes de Merlo estarán muy agradecidos.
            </p>
            <p>
              <button className="btn-btn">Donar</button>
            </p>
          </Jumbotron>
        </Container>
      </section>
    </>
  );
};
export default Donar;
//className="d-flex align-items-stretch justify-content-center text-center
