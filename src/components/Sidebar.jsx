import { SidebarClose } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://dummyjson.com/users?limit=7');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col w-96 bg-base-200 h-screen">
      <div className="flex-none navbar gap-2 bg-base-300">
        <div className="flex-none">
          <button className="btn btn-circle">
            <SidebarClose size={20} />
          </button>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Pencarian"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col overflow-y-scroll flex-1">
        <ul className="menu text-base-content gap-2">
          {users
            .filter(
              (user) =>
                user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                user.lastName.toLowerCase().includes(filter.toLowerCase()) ||
                user.username.toLowerCase().includes(filter.toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>
                <NavLink to={`/${user.username}`} className={'flex gap-2'}>
                  <div className="avatar flex-none online">
                    <div className="w-10 rounded-full bg-black">
                      <img
                        src={`https://robohash.org/${user.username}.jpg`}
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="font-semibold">{`${user.firstName} ${user.lastName}`}</div>
                    <div className="line-clamp-1 text-sm">
                      {user.university}
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
