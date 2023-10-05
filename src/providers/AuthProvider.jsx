import { Outlet, Navigate } from 'react-router-dom';

function AuthProvider() {
  const isLogedIn = false;
  const message = "You must Log in first!"
  if (!isLogedIn) {
    return <Navigate to='login' state={message} />;
  }
  return <Outlet />;
}

export default AuthProvider;
