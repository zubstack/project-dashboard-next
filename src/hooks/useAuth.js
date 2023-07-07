import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const signIn = async (email, password) => {
    setUser('login');
  };
  return { user, signIn };
};
