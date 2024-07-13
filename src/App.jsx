import { RouterProvider, createHashRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';

import HomePage from './pages/HomePage';
import ChatingPage from './pages/ChatingPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import LoginPage from './pages/auth/LoginPage';

import useAuth from './hooks/useAuth';

const AppRouter = createHashRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'setting',
        element: <SettingPage />,
      },
      {
        path: ':username',
        element: <ChatingPage />,
      },
    ],
  },
]);

const AuthRouter = createHashRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <Navigate to={'/'} />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

const App = () => {
  const { user } = useAuth();

  return <RouterProvider router={user ? AppRouter : AuthRouter} />;
};

export default App;
