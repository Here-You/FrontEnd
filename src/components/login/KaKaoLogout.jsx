import axios from 'axios';
import React, { useState } from 'react';
import { useKaKaoToken } from '@/hooks/login/\buseKaKaoToken';

const KakaoLogout = () => {
  const [result, setResult] = useState(null);

  const code = new URL(window.location.href).searchParams.get('code');
  const handleKaKaoLogout = async () => {
    try {
      const logoutEndpoint = 'https://kauth.kakao.com/oauth/token';

      const response = await axios.post(logoutEndpoint, null, {
        headers: {
          Authorization: `Bearer ${code}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      console.log(code);

      console.log('Kakao Logout Success: ', response.data);
    } catch (error) {
      console.log('Kakao Logout Error: ', error.response.data);
      console.log(code);
    }
  };

  return { handleKaKaoLogout };
};

export default KakaoLogout;
