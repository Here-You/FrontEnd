import * as S from './Login.style';
import LoginButton from '@/components/login/LoginButton';
import Logo from '/images/main.svg';

const LoginPage = () => {
  return (
    <S.LoginContainer>
        <S.LogoImg src={Logo}/>
        <LoginButton/>
    </S.LoginContainer>
  )

;
};

export default LoginPage;
