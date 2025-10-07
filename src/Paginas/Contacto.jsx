import { useState } from "react";


export function FormContacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    if (!emailRegex.test(form.email)) {
      nuevosErrores.email = "Correo inválido. Usa un formato correcto.";
    }
    if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return nuevosErrores;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    // Muestra el modal y limpia errores
    setModalVisible(true);
    setErrores({});
    // Opcional: limpiar formulario
    // setForm({ nombre: "", email: "", mensaje: "" });
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <form className="form-kawaii" onSubmit={handleSubmit}>
        <h2>Formulario de Contacto</h2>

        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errores.email && <p className="error">{errores.email}</p>}
        </div>

        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          {errores.mensaje && <p className="error">{errores.mensaje}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Modal kawaii */}
      {modalVisible && (
        <div className="modal-fondo" onClick={cerrarModal}>
          <div
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()} // para que no cierre al click en contenido
          >
            <h3>¡Gracias por tu mensaje! 🌟</h3>
            <p>¡Eres un sol! ☀️ Pronto nos pondremos en contacto contigo.</p>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
