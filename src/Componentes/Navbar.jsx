import { NavLink, Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Marca principal con emojis kawaii */}
        <Link to="/" className="brand-name">
          🌸 La casa de la oficina 🌸
        </Link>

        {/* Enlaces de navegación */}
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            🏠 Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            👩‍💼 Nosotros
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            🛍️ Productos
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            📞 Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}


