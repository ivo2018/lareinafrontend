import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Franquicias from "./components/Franquicias";
import Promociones from "./components/Promociones";
import Servicios from "./components/Servicios";
import SucursalesYContactos from "./components/SucursalesYContactos";
import Noticias from "./components/Noticias";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import coronas from "./imgs/coronas.jpg";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <div class="Container">
        <div class="Container-img">
          <img src={coronas} alt="" />
        </div>
        <NavBar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/franquicias" element={<Franquicias />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/noticias" element={<Noticias />} />¿
          <Route
            path="/sucursalesycontactos"
            element={<SucursalesYContactos />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
