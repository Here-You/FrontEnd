import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import { postSnsLogin } from '@/apis/request/profile';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      postSnsLogin('GOOGLE', tokenResponse.access_token);
      navigate('/signup');
    },
  });

  return <S.LoginButton onClick={() => login()}>구글로 계속하기</S.LoginButton>;
};

export default GoogleLoginButton;
