import React from "react";
import Container from "react-bootstrap/Container";
import coordinadores from '../images/coordinadores.jpg';
import '../index.css';
const Coordinadores = () => {
    return (
        <>
            <div className="celeste">
                <center><h1>#Coordinadores</h1></center>
                <Container className="text-center" >
                    <img src={coordinadores} alt="raices bichito de luz" />
                <center><h5>fulanito menganito, chirombito y chirombita</h5></center>
                    </Container>
            </div>
        </>
    );
};
export default Coordinadores;