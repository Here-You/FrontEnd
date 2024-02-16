import * as S from './PreviewSkeleton.style';

const PreviewSkeleton = () => {
  return (
    <>
      <S.PreviewWrap>
        <S.DateWrapper>
          <S.Date />
        </S.DateWrapper>
        <S.PreviewImg />
        <S.ContentContainer>
          <S.Title />
          <S.Open />
        </S.ContentContainer>
      </S.PreviewWrap>
    </>
  );
};

export default PreviewSkeleton;
