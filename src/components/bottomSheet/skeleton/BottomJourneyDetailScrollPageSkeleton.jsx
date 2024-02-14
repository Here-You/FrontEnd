import * as S from './BottomJourneyDetailScrollPageSkeleton.style';

const BottomJourneyDetailScrollPageSkeleton = () => {
  return (
    <div
      style={{
        height: '100%',
      }}>
      <S.ImageContainer>
        <S.Image />
        <S.Image />
        <S.Image />
      </S.ImageContainer>
      <S.ButtonContainer>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.ButtonContainer>
    </div>
  );
};

export default BottomJourneyDetailScrollPageSkeleton;
