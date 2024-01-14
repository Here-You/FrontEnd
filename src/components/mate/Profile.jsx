import FollowBox from './FollowBox';
import * as S from './Profile.style';

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickname, userid, about, follower, following } = profileData;
  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={imgSrc} alt="Img data" />
        <S.TextContainer>
          <S.NameAndFollow>
            <span>{nickname}</span>
            <S.FollowButton>팔로우</S.FollowButton>
          </S.NameAndFollow>
          <S.UserId>{userid}</S.UserId>
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
