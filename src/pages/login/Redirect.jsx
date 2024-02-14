import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSnsLogin } from '@/apis/request/profile';
import useAuth from '@/store/useAuth';

const Redirect = () => {
  const navigate = useNavigate();
  const { login: kakaoLogin } = useAuth();
  const code = new URLSearchParams(window.location.search).get('code');
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        try {
          const response = await postSnsLogin('KAKAO', code, redirect_uri);

          const token = response.data.token;
          kakaoLogin(token);

          const register_required = response.data.register_required;
          register_required ? navigate('/signup') : navigate('/');
          alert('로그인 성공');
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [code]);

  return (
    <>
      <p>리다이렉트 페이지</p>
    </>
  );
};

export default Redirect;
