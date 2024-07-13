import { LogOut } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card bg-base-200 w-full max-w-sm">
        <div className="card-body">
          <div className="text-center py-4 space-x-2">
            <div className="avatar">
              <div className="w-32 rounded-full bg-base-300">
                <img src={`https://robohash.org/${user}`} alt="" />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-xl font-semibold">{user}</div>
              <span>Member</span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-error" onClick={logout}>
              <span>Logout</span>
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
