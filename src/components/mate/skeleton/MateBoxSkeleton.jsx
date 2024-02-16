import * as S from './MateBoxSkeleton.style';

const MateBoxSkeleton = () => {
  return (
    <S.MateBox>
      <S.MateDescriptionBox>
        <S.MateImage />
        <S.TextBox>
          <S.TextContainer>
            <S.Text />
            <S.Text />
          </S.TextContainer>
        </S.TextBox>
      </S.MateDescriptionBox>
      <S.ImageWrapper>
        {new Array(2).fill(0).map(() => (
          <S.SignatureContainer>
            <S.SignatureImage /> <S.Text />
          </S.SignatureContainer>
        ))}
      </S.ImageWrapper>
    </S.MateBox>
  );
};

export default MateBoxSkeleton;
