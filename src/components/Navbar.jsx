import { BsPersonCircle } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h3>#VANLIFE</h3>
        </Link>
      </div>
      <div className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          to="login"
        >
          <BsPersonCircle />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
