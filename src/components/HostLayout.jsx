import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
  return (
    <>
      <nav className="host-layout-nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="hostVans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
