import SignUpMyInfo from '@/components/signup/SignUpMyInfo';
import * as S from './SignUp.style'


const SignUpPage = () => {
  return (
    <S.SignUpContainer>
      <h2>내 정보</h2>
      <SignUpMyInfo />
    </S.SignUpContainer>
  );
};

export default SignUpPage;
