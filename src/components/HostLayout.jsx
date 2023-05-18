import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="host-layout-nav">
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
