import * as S from './LoginButton.style';

const LoginButton = () => {
  const buttonList = [
    {
      id: 0,
      title: 'Apple로 계속하기',
    },
    {
      id: 1,
      title: 'Google로 계속하기',
    },
    {
      id: 2,
      title: 'Facebook으로 계속하기',
    },
    {
      id: 3,
      title: 'LINE으로 계속하기',
    },
  ];
  return (
    [buttonList.map(b => (
        <S.LoginButton key={b.id}>{b.title}</S.LoginButton>
      ))]
  );
};
export default LoginButton;
