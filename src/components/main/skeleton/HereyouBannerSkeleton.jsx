import * as S from './HereyouBannerSkeleton.style';

const HereyouBannerSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer></S.LogoContainer>
        <S.ContentContainer>
          <S.TextContainer>
            <S.Text />
            <S.Text />
          </S.TextContainer>
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default HereyouBannerSkeleton;
