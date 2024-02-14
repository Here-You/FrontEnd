import * as S from './BottomTravelListskeleton.style';

const BottomTravelListskeleton = () => {
  return (
    <S.ListContainer>
      <S.ListWrapper>
        <S.MarkImage />
        <S.ListDescriptionContainer>
          <S.Title />
          <S.TextContainer>
            <S.Text />
            <S.Text />
          </S.TextContainer>
        </S.ListDescriptionContainer>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default BottomTravelListskeleton;
