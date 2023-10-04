import { Outlet, Navigate } from "react-router-dom"

function AuthProvider() {
  const isLogedIn = false
  if(!isLogedIn) {
    return <Navigate to="login" />
  }
  return <Outlet />
  
}

export default AuthProvider