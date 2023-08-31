import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const foo = 'bar';

  return { user, foo };
};
