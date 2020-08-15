import React from "react";
import Navbar from "./componentes/NavBar";
import Slider from "./componentes/Slider";
import About from "./componentes/About";
import ComoParticipar from "./componentes/ComoParticipar";
import BotonArriba from "./componentes/BotonArriba";
import Donar from "./componentes/Donar";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Nosotros from "./componentes/Nosotros";
import Mapbox from "./componentes/Mapbox";
import Coordinadores from "./componentes/Coordinadores";
import Voluntarios from "./componentes/Voluntarios";
import Comedores from "./componentes/Comedores";
import Lista from "./componentes/Lista";
import Tarjeta from "./componentes/Tarjeta";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* Redirect */
} from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          children={
            <>
              <Slider />
              <About />
              <Donar />
              <ComoParticipar />
              <Contacto />
              <Footer />
              <BotonArriba />
            </>
          }
        />

        <Route exact path="/nosotros" children={
          <>
            <Nosotros />
            <Coordinadores />
            <Voluntarios />
            <Footer />
          </>
        }
        />
        <Route exact path="/comedores"
          children={
            <>
              <Comedores />
              <Lista />
              <Tarjeta/>
              <Mapbox />
              <Footer />

            </>
          }
        />
       
      </Switch>
    </Router>
  );
}

export default Routes;
//
