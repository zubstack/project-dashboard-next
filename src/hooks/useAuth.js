import axios from 'axios';
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

    console.log(access_token);
  };
  return { user, signIn };
};
