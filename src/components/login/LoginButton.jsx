import GoogleLoginButton from './GoogleLoginButton';

import KakaoLoginButton from './KakaoLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton />
      </GoogleOAuthProvider>
      <KakaoLoginButton />
      
    </>
  );
};
export default LoginButton;
