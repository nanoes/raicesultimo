import React from "react";
import Container from "react-bootstrap/Container";
import '../index.css';
const Nosotros = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="title">Nosotros</h1>
        <p className="description">
          <b class="green"> Raíces Merlenses</b> es un grupo de personas dispuestas a brindar lo mejor
          de sí para poder ayudar al otro desde todos los aspectos posibles.
          Tiene sus orígenes en la <b class="green">E.E.M. Nº 16</b>, allá por el 2012, cuando se
          presentó como una lista para el centro de estudiantes que inculcara
          los valores de solidaridad. El grupo creció, aparecieron nuevas
          personas, y esa solidaridad y esos valores empezaron a recorrer las
          calles de Merlo visitando diferentes comedores, merenderos, escuelas,
          jardines y asociaciones.  En la actualidad frecuentamos <b class="green">más de 20
          comedores y merenderos</b> y brindamos nuestra ayuda a todos aquellos
          vecinos que estén atravesando una situación particular por diferentes
          factores. No hay una bandera política compartida, ni intereses que
          vayan más allá de nuestra simple intención de dar lo mejor de cada
          uno. <b class="green">Raíces somos muchos!</b> Los que se fueron y se mantienen en
          contacto, los que ponen el cuerpo en cada jornada, los que nos acercan
          colaboraciones, los que recorren barrios a pie para llegar hasta el
          más vulnerable.  No solo tratamos de llevar elementos materiales, como
          alimentos o vestimenta, sino que también llevamos juegos, abrazos,
          escucha y cariño. Con mucho o poco, estamos convencidos que lo más
          importante es estar con el otro y que ese otro sepa que acá hay
          equipo, y que <b class="green">nunca los vamos a dejar solos</b>.
        </p>
        <button className="boton-about">Quiero donar</button>
      </Container>
    </>
  );
};

export default Nosotros;
