import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import { postSnsLogin } from '@/apis/request/profile';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      await postSnsLogin('GOOGLE', tokenResponse.access_token);
      console.log(import.meta.env.VITE_REDIRECT_URI);
      navigate('/login/oauth');
    },
    onError: error => {
      console.error('에러:', error);
    },
  });
  

  return <S.LoginButton onClick={login}>구글로 계속하기</S.LoginButton>;
};

export default GoogleLoginButton;
