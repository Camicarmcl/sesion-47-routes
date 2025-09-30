import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Paginas/Inicio";
import { Nosotros } from "./Paginas/Nosotros";
import { Productos } from "./Paginas/Productos";
import { Navbar }from "./Componentes/Navbar";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Inicio/>}></Route>
    <Route path="/nosotros" element={<Nosotros/>}></Route>
    <Route path="/productos" element={<Productos/>}></Route>
  </Routes>
  </>
  )
}

export default App;