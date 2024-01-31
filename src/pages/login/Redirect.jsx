import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSnsLogin } from '@/apis/request/profile';

const Redirect = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEAY;
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get('code');

  const getToken = async () => {
    if (!code) {
      return {};
    }
    const param = new searchParams({
      grant_type : 'authorization_code',
    })
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: par
    });
  };

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
