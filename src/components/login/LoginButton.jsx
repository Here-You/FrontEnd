import GoogleLoginButton from './GoogleLoginButton';
// import GoogleLogout from './GoogleLogout';
import KakaoLoginButton from './KakaoLoginButton';
import * as S from './LoginButton.style';
import LOGIN_BUTTON_LIST from '@/constants/login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLoginButton />
      {/* <GoogleLogout /> */}
    </GoogleOAuthProvider>
    <KakaoLoginButton/>
    </>
  );
};
export default LoginButton;
