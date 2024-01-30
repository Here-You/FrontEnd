import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import { useGoogleLogin } from '@react-oauth/google';
import { postSnsLogin } from '@/apis/request/profile';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      postSnsLogin("GOOGLE","OAUTH_TOKEN");
      navigate('/signup');
    },
  });

  return <S.LoginButton onClick={() => login()}>구글로 계속하기</S.LoginButton>;
};

export default GoogleLoginButton;
