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
        <a href="/">La Reina</a>
        <a href="/products"> Productos</a>
        <a href="/home">Servicios</a>
        <a href="/home">Franquicias</a>

        <span></span>
        <a href="/home">Promociones</a>
        <a href="/home">Noticias</a>
        <a href="/home">Sucursales y contacto</a>
      </ul>
    </div>
  );
}

export default NavBar;
