import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import * as S from './SnsLoginButton.style';
import GoogleIcon from '/images/Google.svg';
import { postSnsLogin } from '@/apis/request/profile';
import useAuth from '@/store/useAuth';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login: googleLogin } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const response = await postSnsLogin('GOOGLE', tokenResponse.access_token);
      const token = response.data.token;
      googleLogin(token);
      const register_required = response.data.register_required;
      register_required ? navigate('/signup') : navigate('/');
      toast.success('로그인 성공');
    },
    onError: error => {
      console.error('에러:', error);
    },
  });

  return (
    <S.LoginButton onClick={login}>
      <S.Icon src={GoogleIcon} />
      <h3>구글 로그인 </h3>
    </S.LoginButton>
  );
};

export default GoogleLoginButton;
