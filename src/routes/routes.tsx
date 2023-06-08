import { RouteObject } from 'react-router-dom';
import { HomePage, Login, Signup, Dashboard } from '../pages';
import { Navbar } from '../layouts';
import ProtectedRoute from './ProtectedRoute';
import ReverseRoute from './ReverseRoute';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'account',
        element: <ReverseRoute />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
      {
        path: 'user',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'project',
          },
          {
            path: 'settings',
          },
          {
            path: 'profile',
          },
          {
            path: 'dashboard',
          },
        ],
      },
    ],
  },
];

export default routes;
