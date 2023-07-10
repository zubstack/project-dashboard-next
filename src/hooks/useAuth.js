import axios from 'axios';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { endpoints } from 'services/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookies.get('token');

      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get(endpoints.auth.profile);

        setUser(user);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  const signIn = async (email, password) => {
    try {
      const options = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
      //The api's 'data' turn to 'acces_token'
      const { data: access_token } = await axios
        //(apiUrl, data or parameters to send, request settings )
        .post(endpoints.auth.login, { email, password }, options);

      if (access_token) {
        const token = access_token.access_token;
        // Save the token informationn inside the navigator:
        Cookies.set('token', token, { expires: 5 });
        axios.defaults.headers.Authorization = `Bearer ${token}`;
      }
      await fetchUser();
    } catch (error) {
      setUser(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  console.log(user);

  return { user, signIn };
};
