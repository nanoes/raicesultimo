import React from 'react';
import Card from 'react-bootstrap/Card';
/* import CardImg from 'react-bootstrap';
import CardBody from 'react-bootstrap';
import CardTitle from 'react-bootstrap';
import CardText from 'react-bootstrap'; */
import Button from 'react-bootstrap/Button';
import Voluntarios from '../images/voluntarios.jpg';
import '../index.css';
const Tarjeta = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={Voluntarios} alt="Voluntarios de Raices" />
          <Card.Body>
            <Button variant="primary" className="voluntario btn-btn">DONAR!</Button>
          </Card.Body>
      </Card>
    </div>
  );
};
export default Tarjeta;
