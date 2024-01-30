import axios from 'axios';
import React, { useEffect } from 'react';


const Redirect = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  const getToken = async code => {
    const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEAY;
    const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    const response = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );

    return response.json();
  };

  useEffect(() => {
    if (code) {
      getToken(code).then(res => {
        console.log(res.access_token);
      });
    }
  }, [code]);

  const handleLogin = () => {

    console.log('Login button clicked');
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인 확인 완료</button>
      <p>리다이렉트 페이지</p>
    </div>
  );
};

export default Redirect;
