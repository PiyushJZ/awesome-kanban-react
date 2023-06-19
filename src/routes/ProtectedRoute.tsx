import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = '';

  const flag = token ? true : false;

  return flag ? <Outlet /> : <Navigate to='/account/login' />;
};

export default ProtectedRoute;
