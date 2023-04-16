import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Productos from "./components/Productos";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div class="Container">
        <NavBar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
