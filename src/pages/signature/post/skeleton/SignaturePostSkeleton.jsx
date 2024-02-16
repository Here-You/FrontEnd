import * as S from './SignaturePostSkeleton.style';

const SignaturePostSkeleton = () => {
  return (
    <S.SignatureContainer>
      <S.TitleContainer>
        <S.Title />
      </S.TitleContainer>
      <S.HeaderContainer>
        <S.ProfileContainer>
          <S.ProfileImg />
          <S.ProfileDesc>
            <S.Title />
            <S.Title />
          </S.ProfileDesc>
        </S.ProfileContainer>
        <S.Button />
      </S.HeaderContainer>

      <S.ButtonContainer>
        <S.Liked />
      </S.ButtonContainer>

      <S.ImageContainer>
        <S.Image />
      </S.ImageContainer>

      <S.TextContainer>
        <S.Content />
        <S.Content />
      </S.TextContainer>
    </S.SignatureContainer>
  );
};

export default SignaturePostSkeleton;
