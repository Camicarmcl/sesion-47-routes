import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Paginas/Inicio";
import { Nosotros } from "./Paginas/Nosotros";
import { Productos } from "./Paginas/Productos";
import { Navbar }from "./Componentes/Navbar";
import { Detalle } from "./Paginas/Detalle";
import {FormContacto} from "./Paginas/Contacto";
function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Inicio/>}></Route>
    <Route path="/nosotros" element={<Nosotros/>}></Route>
    <Route path="/productos" element={<Productos/>}></Route>
    <Route path="/productos/:id" element={<Detalle/>}></Route>
    <Route path="/contacto" element={<FormContacto/>}></Route>
  </Routes>
  </>
  )
}

export default App;