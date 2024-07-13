import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser('');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
