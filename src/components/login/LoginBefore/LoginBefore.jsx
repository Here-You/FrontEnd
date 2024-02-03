import * as S from './LoginBefore.style';
import loginBeforeImg from '/images/loginBefore.svg';
import {  useNavigate } from 'react-router-dom';
const LoginBefore = () => {
    const navigate = useNavigate();
  return (
    <S.Container>
      <S.Gradation />

      <S.ContentContainer>
        <S.LogoImg src={loginBeforeImg} alt="로고" />
        <h1>
          막막한 여행도
          <br />
          이유를 알면
          <br />
          지피지기 백전백승
        </h1>
        <p> 여행을 정리하고 기록하며 당신을 알아가보세요.</p>
        <S.StartButton onClick={()=> navigate("/login")}>시작하기</S.StartButton>
      </S.ContentContainer>
    </S.Container>
  );
};
export default LoginBefore;
