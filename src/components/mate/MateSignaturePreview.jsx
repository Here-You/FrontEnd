import FollowButton from './FollowButton';
import * as S from './MateSignaturePreview.style';
import MateLookSignatue from '/images/mate/mateLookSignature.jpg';

const MateSignaturePreview = ({ mateData }) => {
  if (!mateData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickName, signatureImg, title } = mateData;

  return (
    <S.MainContainer>
      <S.ProfileContainer>
        <img src={imgSrc} />
        <S.ColumnContainer>
          <S.RowContainer>
            <span>매튜튜</span>
            <FollowButton />
          </S.RowContainer>
          <S.UserBio>가나다라마바사</S.UserBio>
        </S.ColumnContainer>
      </S.ProfileContainer>

      <S.SignatureContainer>
        <S.SignatureContent>
          <img src={MateLookSignatue} />
          <span>뽀똔이와 함께하는 일본 뿌시기</span>
        </S.SignatureContent>
        <S.SignatureContent>
          <img src={MateLookSignatue} />
          <span>뽀똔이와 함께하는 일본 뿌시기</span>
        </S.SignatureContent>
      </S.SignatureContainer>
    </S.MainContainer>
  );
};

export default MateSignaturePreview;
