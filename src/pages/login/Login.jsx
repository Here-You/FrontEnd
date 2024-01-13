import * as S from './Login.style';
import LoginButton from '@/components/login/LoginButton';
import Logo from '../../../public/images/main.svg';

const LoginPage = () => {
  return (
    <S.LoginWrap>
        <S.LogoImg src={Logo}/>
      
        <LoginButton/>
    </S.LoginWrap>
  )

;
};

export default LoginPage;
