import React from "react";
import "./NavBar.css";
import Corona from "../imgs/Corona2.png";

import img from "../imgs/Icono.png";
function NavBar() {
  return (
    <div class="NavBar-father">
      {/**   <p>PANADERIAS Y CONFITERÍAS ARTESANALES</p> */}
      <span class="logo">
        <img src={img} alt="" />
      </span>

      <ul class="NavContainer">
        <a href="/" class="linke">
          La Reina
        </a>

        <a href="/products" class="link">
          <img src={Corona} alt="" />
          Productos
        </a>

        <a href="/servicios" class="link">
          <img src={Corona} alt="" />
          Servicios
        </a>
        <a href="/franquicias" class="link">
          <img src={Corona} alt="" />
          Franquicias
        </a>

        <span></span>
        <a href="/promociones" class="link">
          <img src={Corona} alt="" />
          Promociones
        </a>
        <a href="/noticias" class="link">
          <img src={Corona} alt="" />
          Noticias
        </a>
        <a href="/sucursalesycontactos" class="link">
          <img src={Corona} alt="" />
          Sucursales y contacto
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
