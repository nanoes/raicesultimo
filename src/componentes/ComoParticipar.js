import React from "react";
/* import Container from "react-bootstrap/Container"; */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* import Button from "react-bootstrap/Button"; */
import Card from "react-bootstrap/Card";
import voluntario from "../images/voluntariado.png";
import donar from "../images/maps.png";

const ComoParticipar = () => {
  return (
    <>
      <div id="comoparticipar" className="section3 text-center">
        <h1 className="title">#ComoParticipar</h1>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-stretch justify-content-center text-center"
          >
            <Card className="cards">
              <Card.Img variant="top" src={donar} />
              <Card.Body>
                <Card.Title>Nuestros merenderos</Card.Title>
                <Card.Text>
                  Aca te dejamos un listado con la direccion de nuestros
                  merenderos y sus responsables para que sepas donde
                  encontrarnos.
                </Card.Text>
                <button className="btn-btn">Conocenos aca</button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex align-items-stretch justify-content-center text-center"
          >
            <Card className="cards">
              <Card.Img variant="top" src={voluntario} />
              <Card.Body>
                <Card.Title>Quiero ser voluntario</Card.Title>
                <Card.Text>
                  Queres formar parte y ayudarnos a mejorar la vida de los
                  merlenses? Contactanos llenando este formulario.
                </Card.Text>
                <button className="btn-btn">Formulario</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ComoParticipar;
