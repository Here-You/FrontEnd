import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import { postSnsLogin } from '@/apis/request/profile';
import useAuth from '@/store/useAuth';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login: googleLogin } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const response = await postSnsLogin('GOOGLE', tokenResponse.access_token);
      const token = response.data.token;
      googleLogin(token);
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
