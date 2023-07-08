import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { endpoints } from 'services/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
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
      // Save the token informationn inside the navigator:
      Cookies.set('token', access_token.access_token, { expires: 5 });
    }
    console.log(access_token);
  };
  return { user, signIn };
};
