import * as S from './Login.style';
import plane from '/images/airplane.svg';
import Logo from '/images/main.svg';
import LoginButton from '@/components/login/LoginButton';

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.LogoImg src={Logo} />
      <S.AirPlane src={plane} />
      <S.ButtonWrap>
        <LoginButton />
      </S.ButtonWrap>
    </S.LoginContainer>
  );
};

export default LoginPage;
