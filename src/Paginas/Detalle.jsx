import { useParams, Link } from "react-router-dom";
import { listaProductos } from "../assets/productos";

export function Detalle() {
  const { id } = useParams();

  // Buscar producto por id (asegúrate que ambos sean del mismo tipo: número o string)
  const producto = listaProductos.find((product) => product.id === Number(id));

  // Validar si el producto existe
  if (!producto) {
    return <div>Producto no existe</div>;
  }
    return(
 <div style={{ padding: "20px" }}>
      <h1 id="detalle-tittle">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      {/* Imagen si existe */}
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ maxWidth: "300px", marginTop: "10px" }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300?text=Sin+Imagen";
          }}
        />
      )}

      {/* Botón para volver */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/productos" style={{ color: "#007bff", textDecoration: "none" }}>
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}