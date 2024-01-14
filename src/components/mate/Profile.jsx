import FollowBox from './FollowBox';
import * as S from './Profile.style';

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickName, userId, about, follower, following } = profileData;
  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={imgSrc} alt="Img" />
        <S.TextContainer>
          <S.NameAndFollow>
            <span>{nickName}</span>
            <S.FollowButton>팔로우</S.FollowButton>
          </S.NameAndFollow>
          <S.UserId>{userId}</S.UserId>
          <S.UserAbout>{about}</S.UserAbout>
          <S.FollowContainer>
            <FollowBox text="팔로워" num={follower} />
            <FollowBox text="팔로잉" num={following} />
          </S.FollowContainer>
        </S.TextContainer>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default Profile;
