import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SendMessage from '../components/SendMessage';

const HomeLayout = () => {
  return (
    <div className="drawer md:drawer-open h-screen max-h-80">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-y-scroll">
          <Outlet />
        </div>
        <SendMessage />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomeLayout;
