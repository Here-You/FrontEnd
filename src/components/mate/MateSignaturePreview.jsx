import * as S from './MateSignaturePreview.style';

const MateSignaturePreview = () => {
  return (
    <S.MainContainer>
      <S.FirstLine>
        <S.UserImg />
        <S.UserName>매튜</S.UserName>
        <S.FollowButton>
          <span>팔로우</span>
        </S.FollowButton>
      </S.FirstLine>
      <S.PreviewImg />
      <S.StyledTitle>뽀똔이와 함께하는 일본 뿌시기</S.StyledTitle>
      <S.StyledText>자세히 보기</S.StyledText>
    </S.MainContainer>
  );
};

export default MateSignaturePreview;
