import React, { useState, useEffect } from "react";
import "./Productos.css";
import products from "./Lista";
const Productos = () => {
  const [select, setSelect] = useState("");
  useEffect(() => {
    console.log("el producto selecionado es ", select);
  });

  return (
    <div class="Productos-Container">
      <b
        onClick={() => setSelect("")}
        style={{ position: "relative", top: "0.5em" }}
      >
        Productos
      </b>
      <ul class="Productos-Container-Select__ul">
        <button onClick={() => setSelect("platolisto")}>Platos listos</button>
        <button onClick={() => setSelect("pasteleria")}>Pasteleria</button>
        <button onClick={() => setSelect("confiteria")}>Confiteria</button>
        <button onClick={() => setSelect("platolisto")}>Platos listos</button>
        <button onClick={() => setSelect("pasteleria")}>Pasteleria</button>
        <button onClick={() => setSelect("confiteria")}>Confiteria</button>
      </ul>

      <div class="Productos-Container__list">
        {products
          .filter((producto) => {
            if (select) {
              return producto.category === select;
            } else {
              return producto;
            }
          })
          .map((productos) => {
            return (
              <div class="Productos-Container__list-cards">
                <p>{productos.title}</p>
                <img src={productos.img} alt="" />

                <p>{productos.price}$</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Productos;
