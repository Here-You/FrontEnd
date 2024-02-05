import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import { postSnsLogin } from '@/apis/request/profile';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const response = await postSnsLogin('GOOGLE', tokenResponse.access_token);
      const token = response.data.token;
      localStorage.setItem('x-access-token', token);
      const register_required = response.data.register_required;
      register_required ? navigate('/signup') : navigate('/');
      alert('로그인 성공');
    },
    onError: error => {
      console.error('에러:', error);
    },
  });

  return <S.LoginButton onClick={login}>구글로 계속하기</S.LoginButton>;
};

export default GoogleLoginButton;
