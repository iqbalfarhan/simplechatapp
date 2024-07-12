import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SendMessage from '../components/SendMessage';

const HomeLayout = () => {
  return (
    <div className="drawer lg:drawer-open h-screen max-h-80">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-y-scroll">
          <div className="container min-h-full">
            <Outlet />
          </div>
        </div>
        <SendMessage />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomeLayout;
