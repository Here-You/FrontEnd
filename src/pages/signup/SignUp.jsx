import * as S from './SignUp.style';
import SignUpMyInfo from '@/components/signup/SignUpMyInfo';

const SignUpPage = () => {
  return (
    <S.SignUpContainer>
      <h2>내 정보</h2>
      <SignUpMyInfo />
    </S.SignUpContainer>
  );
};

export default SignUpPage;
