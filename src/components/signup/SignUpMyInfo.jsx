import * as S from './SignUpMyInfo.style';

const SignUpMyInfo = () => {
  return (
    <>
      <S.TextAreaContainer>
        <p>닉네임</p>
        <S.NickNameTextArea></S.NickNameTextArea>
        <p>자기 소개</p>
        <S.IntroTextArea />
        <S.StoreButton>저장하기</S.StoreButton>
      </S.TextAreaContainer>
  
    </>
  );
};
export default SignUpMyInfo;
