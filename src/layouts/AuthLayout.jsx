import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-base-200 p-6">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
