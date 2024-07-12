import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import ChatingPage from './pages/ChatingPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';

const router = createHashRouter([
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
