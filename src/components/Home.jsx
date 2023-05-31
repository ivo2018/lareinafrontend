import React from "react";
import "./Home.css";
import Principal from "../imgs/ReinaPrincipal.jpg";
import Principal1 from "../imgs/ReinaPrincipal1.jpg";
import Principal2 from "../imgs/ReinaPrincipal2.jpg";
function Home() {
  return (
    <div class="Home-Carousel">
      <div class="Home-Carousel__principal">
        <img src={Principal} alt="la reina" />
      </div>
      <div class="Home-Carousel__cards">
        <div class="Home-Carousel__second">
          <p>La Reina Pinamar</p>
          <img src={Principal1} alt="la reina" />
          <b>
            40 AÑOS DE HISTORIA EN EL RUBRO, BRINDANDNO PRODUCTOS DE EXCELENCIA.
            VISITE LA CASA CENTRAL EN PINAMAR.
          </b>
        </div>
        <div class="Home-Carousel__trhee">
          <p>Servicio Mayorista</p>
          <img src={Principal2} alt="la reina" />
          <b>
            NUESTRA FÁBRICA EN PINAMAR PROVEE PRODUCTOS A EMPRESAS Y LOCALES DE
            TODA LA COSTA ATLÁNTICA.
          </b>
        </div>
      </div>
    </div>
  );
}

export default Home;
