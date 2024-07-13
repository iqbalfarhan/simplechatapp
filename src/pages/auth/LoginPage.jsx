import { LogIn } from 'lucide-react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('iqbalfarhan');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    setError(false);
    e.preventDefault();

    if (!username) {
      setError(true);
    }

    login(username);
  };

  return (
    <div className="card max-w-md w-full bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <h3 className="card-title">Login dengan username</h3>
        <div className="py-4 space-y-2">
          <input
            className={error ? 'input-error' : ''}
            type="text"
            value={username}
            placeholder="Input username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn">
            <span>Login</span>
            <LogIn size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
