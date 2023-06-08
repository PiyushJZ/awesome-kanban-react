import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = 'fasdf';

  const flag = token ? true : false;

  return flag ? <Outlet /> : <Navigate to='auth/login' />;
};

export default ProtectedRoute;
