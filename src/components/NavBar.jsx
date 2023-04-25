import React from "react";
import "./NavBar.css";

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
          {" "}
          Productos
        </a>
        <a href="/home" class="link">
          Servicios
        </a>
        <a href="/home" class="link">
          Franquicias
        </a>

        <span></span>
        <a href="/home" class="link">
          Promociones
        </a>
        <a href="/home" class="link">
          Noticias
        </a>
        <a href="/home" class="link">
          Sucursales y contacto
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
