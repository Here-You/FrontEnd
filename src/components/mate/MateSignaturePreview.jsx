import * as S from './MateSignaturePreview.style';

const MateSignaturePreview = ({ mateData }) => {
  if (!mateData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickName, signatureImg, title } = mateData;

  return (
    <S.MainContainer>
      <S.FirstLine>
        <S.UserImg src={imgSrc} />
        <S.UserName>{nickName}</S.UserName>
        <S.FollowButton>
          <span>팔로우</span>
        </S.FollowButton>
      </S.FirstLine>
      <S.PreviewImg src={signatureImg} />
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledText>자세히 보기</S.StyledText>
    </S.MainContainer>
  );
};

export default MateSignaturePreview;
