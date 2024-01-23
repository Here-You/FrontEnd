import * as S from './Login.style';
import Logo from '/images/main.svg';
import LoginButton from '@/components/login/LoginButton';

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.LogoImg src={Logo} />
      <S.ButtonWrap>

          <LoginButton />
  
      </S.ButtonWrap>
    </S.LoginContainer>
  );
};

export default LoginPage;
