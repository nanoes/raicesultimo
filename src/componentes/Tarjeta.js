import React from 'react';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardText from 'react-bootstrap/CardText';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import Button from 'react-bootstrap/Button';

const Tarjeta = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="middle" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
};
export default Tarjeta;
