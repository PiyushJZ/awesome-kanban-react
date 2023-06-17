import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { Navbar } from '@/layouts';
import ProtectedRoute from './ProtectedRoute';
import ReverseRoute from './ReverseRoute';

const HomePage = lazy(() =>
  import('@/pages').then(module => ({ default: module.HomePage }))
);
const Login = lazy(() =>
  import('@/pages').then(module => ({ default: module.Login }))
);
const Signup = lazy(() =>
  import('@/pages').then(module => ({ default: module.Signup }))
);
const Dashboard = lazy(() =>
  import('@/pages').then(module => ({ default: module.Dashboard }))
);
const Features = lazy(() =>
  import('@/pages').then(module => ({ default: module.Features }))
);
const Pricing = lazy(() =>
  import('@/pages').then(module => ({ default: module.Pricing }))
);
const AboutUs = lazy(() =>
  import('@/pages').then(module => ({ default: module.AboutUs }))
);
const Profile = lazy(() =>
  import('@/pages').then(module => ({ default: module.Profile }))
);
const Settings = lazy(() =>
  import('@/pages').then(module => ({ default: module.Settings }))
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>Wait...</>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'features',
        element: (
          <Suspense fallback={<>Wait...</>}>
            <Features />
          </Suspense>
        ),
      },
      {
        path: 'pricing',
        element: (
          <Suspense fallback={<>Wait...</>}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: 'about-us',
        element: (
          <Suspense fallback={<>Wait...</>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: 'account',
        element: <ReverseRoute />,
        children: [
          {
            path: 'login',
            element: (
              <Suspense fallback={<>Wait...</>}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: 'signup',
            element: (
              <Suspense fallback={<>Wait...</>}>
                <Signup />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'user',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: (
              <Suspense fallback={<>Wait...</>}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: 'project',
          },
          {
            path: 'settings',
            element: (
              <Suspense fallback={<>Wait...</>}>
                <Settings />
              </Suspense>
            ),
          },
          {
            path: 'profile',
            element: (
              <Suspense fallback={<>Wait...</>}>
                <Profile />
              </Suspense>
            ),
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
