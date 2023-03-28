import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h3>#VANLIFE</h3></Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
}

export default Navbar;
