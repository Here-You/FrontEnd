import * as S from './MapContainerSkeleton.style';

const MapContainerSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextContainer>
          <S.Text1 />
          <S.Text2 />
        </S.TextContainer>
        <S.BoxContainer>
          <S.Box>
            <S.Icon />
            <S.Text1 />
          </S.Box>
          <S.Box>
            <S.Icon />
            <S.Text1 />
          </S.Box>
        </S.BoxContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default MapContainerSkeleton;
