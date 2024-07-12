import {
  Trash,
  Ban,
  User,
  Settings,
  EllipsisVertical,
  ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Navbar = () => {
  const { username } = useParams();
  const [isTyping] = useState(true);

  if (username) {
    return (
      <div className="navbar bg-base-200">
        <div className="flex-none">
          <Link to={'/'} className="btn btn-circle">
            <ArrowLeft size={20} />
          </Link>
        </div>
        <div className="flex-1">
          <h2 className="btn btn-ghost text-lg">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={`https://robohash.org/${username}.jpg`} alt="User" />
              </div>
            </div>
            <span>@{username}</span>
            {isTyping && (
              <small className="text-xs opacity-50">is typing...</small>
            )}
          </h2>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
              <EllipsisVertical size={20} />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>
                  <User size={16} />
                  <span>@{username}</span>
                </a>
              </li>
              <li>
                <a>
                  <Trash size={16} />
                  <span>Hapus obrolan</span>
                </a>
              </li>
              <li>
                <a>
                  <Ban size={16} />
                  <span>Blokir orang ini</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <h2 className="btn btn-ghost text-lg">
          <span>Kontakku</span>
        </h2>
      </div>
      <div className="navbar-end">
        <Link to={'/setting'} className="btn btn-circle">
          <Settings size={20} />
        </Link>
        <Link to={'/profile'} className="btn btn-circle">
          <User size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
