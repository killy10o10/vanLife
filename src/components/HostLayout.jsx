import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="host-layout-nav">
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive? "activeStyle" : null} to="income">Income</NavLink>
        <NavLink className={({isActive}) => isActive? "activeStyle" : null} to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout;
