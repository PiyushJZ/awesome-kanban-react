import { Outlet, Navigate } from 'react-router-dom';

const ReverseRoute = () => {
  const token = '';
  const flag = token ? false : true;

  return flag ? <Outlet /> : <Navigate to='../user' />;
};

export default ReverseRoute;
