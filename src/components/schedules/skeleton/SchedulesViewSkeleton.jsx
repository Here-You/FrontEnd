import * as S from './SchedulesViewSkeleton.style';

const SchedulesViewSkeleton = () => {
  return (
    <S.Container>
      <S.MainContainer>
        <S.RowContainer>
          <S.Title />
          <S.LeftContainer>
            <S.Date />
            <S.Image />
            <S.SaveButton />
          </S.LeftContainer>
        </S.RowContainer>
        <S.RowContainer>
          <S.Mate>
            <S.Image />
            <S.Image />
          </S.Mate>
          <S.LeftContainer>
            <S.Image />
            <S.Image />
          </S.LeftContainer>
        </S.RowContainer>
      </S.MainContainer>
    </S.Container>
  );
};

export default SchedulesViewSkeleton;
