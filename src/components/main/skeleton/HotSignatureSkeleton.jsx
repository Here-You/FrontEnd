import * as S from './HotSignatureSkeleton.style';

const HotSignatureSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image />
        <S.ContentContainer>
          <S.Time />
          <S.Text />
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default HotSignatureSkeleton;
