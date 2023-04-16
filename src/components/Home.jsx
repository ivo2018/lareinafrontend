import React from "react";
import "./Home.css";
function Home() {
  return (
    <div class="Home-Carousel">
      <div class="Home-Carousel__principal">
        <img
          src="http://www.lareinapinamar.com.ar/img/inicio/2.jpg"
          alt="la reina"
        />
      </div>
      <div class="Home-Carousel__cards">
        <div class="Home-Carousel__second">
          <p>La Reina Pinamar</p>
          <img
            src="http://www.lareinapinamar.com.ar/img/inicio/3.jpg"
            alt="la reina"
          />
          <b>
            40 AÑOS DE HISTORIA EN EL RUBRO, BRINDANDNO PRODUCTOS DE EXCELENCIA.
            VISITE LA CASA CENTRAL EN PINAMAR.
          </b>
        </div>
        <div class="Home-Carousel__trhee">
          <p>Servicio Mayorista</p>
          <img
            src="http://www.lareinapinamar.com.ar/img/thumb_mayorista.jpg"
            alt="la reina"
          />
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
