import * as S from './LoginSkeleton.style';

const LoginSkeleton = () => {
  return (
    <S.LoginWrapper>
      <S.Container>
        <S.Img />
        <S.TextContainer>
          <S.Text1 />
          <S.ProfileContainer>
            <S.Text2 />
          </S.ProfileContainer>
        </S.TextContainer>
      </S.Container>
    </S.LoginWrapper>
  );
};

export default LoginSkeleton;
