import { NavLink, Link } from 'react-router-dom'

export function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand-name">
          🌸 La casa de la oficina 🌸 
        </Link>

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
        </div>
      </div>
    </nav>
  );
}
