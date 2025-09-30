// Productos.jsx

// Asegúrate de que la ruta de importación sea correcta.
// Si datosProductos.js está en el mismo nivel, usa './datosProductos.js'
import { listaProductos } from "../assets/productos";

export function Productos() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Catálogo de Productos de Oficina 🏢</h1>
            
            {/* Contenedor principal para la lista de productos */}
            <div style={styles.contenedorProductos}>
                {listaProductos.map((producto) => (
                    // Elemento individual del producto
                    <div key={producto.id} style={styles.tarjetaProducto}>
                        {/* Imagen del producto (usa una imagen real si tienes los assets) */}
                        <img 
                            src={producto.imagen} 
                            alt={producto.nombre} 
                            style={styles.imagen}
                            // Si las URLs de imagen no son válidas, se mostrará el texto alternativo
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Sin+Imagen' }}
                        />
                        
                        {/* Contenido del producto */}
                        <div style={styles.contenido}>
                            <h2 style={styles.nombre}>{producto.nombre}</h2>
                            <p style={styles.descripcion}>{producto.descripcion}</p>
                            <p style={styles.precio}>
                                **Precio:** <span style={styles.valorPrecio}>${producto.precio.toFixed(2)}</span>
                            </p>
                            <button style={styles.boton}>Añadir al Carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Objeto para estilos básicos (CSS-in-JS)
const styles = {
    contenedorProductos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Diseño responsivo con columnas
        gap: '20px',
        marginTop: '20px',
    },
    tarjetaProducto: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imagen: {
        width: '100%',
        height: 'auto',
        maxHeight: '150px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginBottom: '10px',
    },
    contenido: {
        textAlign: 'center',
        width: '100%',
    },
    nombre: {
        fontSize: '1.2em',
        margin: '5px 0',
        color: '#333',
    },
    descripcion: {
        fontSize: '0.9em',
        color: '#666',
        marginBottom: '10px',
    },
    precio: {
        fontSize: '1.1em',
        fontWeight: 'bold',
        color: '#4CAF50',
        margin: '10px 0',
    },
    valorPrecio: {
        color: '#333',
    },
    boton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
        maxWidth: '200px',
    }
};