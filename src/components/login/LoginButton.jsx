import * as S from './LoginButton.style';
import LOGIN_BUTTON_LIST from '@/constants/login';
const LoginButton = () => {
  return (
    [LOGIN_BUTTON_LIST.map(b => (
        <S.LoginButton key={b.id}>{b.title}</S.LoginButton>
      ))]
  );
};
export default LoginButton;
