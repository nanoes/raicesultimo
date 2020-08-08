import React from "react";
import Container from "react-bootstrap/Container";
import voluntarios from '../images/voluntarios.jpg';
import '../index.css';
const Voluntarios = () => {
    return (
        <>
            <div>
                 <Container className="text-center" >
                <strong>
                    <center>
                        <h1>#Voluntarios</h1>
                    </center>
                </strong>
               
                   <img src={voluntarios} alt="voluntarios raices" />
                    <center><h5>fulanito menganito, chirombito y chirombita</h5></center>
                    <button className="voluntario btn-btn">Quiero ser voluntario!</button>
                </Container>
            </div>
        </>
    );
};
export default Voluntarios;