import FollowButton from './FollowButton';
import * as S from './MateSignaturePreview.style';
import MateLookSignatue from '/images/mate/mateLookSignature.jpg';

const MateSignaturePreview = ({ mateData }) => {
  if (!mateData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { nickname, bio, image, is_following, signature } = mateData;

  return (
    <S.MainContainer>
      <S.ProfileContainer>
        <img src={image} />
        <S.ColumnContainer>
          <S.RowContainer>
            <span>{nickname}</span>
            <FollowButton isFollowing={is_following} name={nickname} />s
          </S.RowContainer>
          <S.UserBio>{bio}</S.UserBio>
        </S.ColumnContainer>
      </S.ProfileContainer>

      <S.SignatureContainer>
        {signature.map(s => (
          <S.SignatureContent>
            <img src={s.image} />
            <span>{s.title}</span>
          </S.SignatureContent>
        ))}
      </S.SignatureContainer>
    </S.MainContainer>
  );
};

export default MateSignaturePreview;
