import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSnsLogin } from '@/apis/request/profile';
import { useLoginToken } from '@/hooks/login/useLoginToken';

const Redirect = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEAY;
  const redirect_uri = import.meta.env.REDIRECT_URI;
  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    if (code) {
      postSnsLogin('kakao', code);
      localStorage.setItem('token',code);
    }
  }, [code]);

  const handleLogin = () => {
    console.log('Login button clicked');
    navigate('/signup');
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인 확인 완료</button>
      <p>리다이렉트 페이지</p>
    </div>
  );
};

export default Redirect;
