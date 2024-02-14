import * as S from './SignatureSearchPreviewSkeleton.style';

const Preview = (
  <S.PreviewWrap>
    <S.PreviewImg />
    <S.PreviewTitle />
    <S.Profile>
      <S.ProfileImg />
      <S.Nickname />
    </S.Profile>
    <S.Info>
      <S.Date />
      <S.HeartContainer />
    </S.Info>
  </S.PreviewWrap>
);

const SignatureSearchPreviewSkeleton = () => {
  return (
    <>
      <S.PageContainer>
        <S.Title />
        <S.PreviewContainer>
          {new Array(10).fill(0).map(() => Preview)}
        </S.PreviewContainer>
      </S.PageContainer>

      <S.PageContainer>
        <S.Title />
        <S.PreviewContainer>
          {new Array(10).fill(0).map(() => Preview)}
        </S.PreviewContainer>
      </S.PageContainer>
    </>
  );
};

export default SignatureSearchPreviewSkeleton;
