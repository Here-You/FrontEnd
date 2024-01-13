import * as A from './Profile.style';

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickname, userid, about, follower, following } = profileData;
  return (
    <A.CenteredContainer>
      <A.ProfileContainer>
        <A.UserImg src={imgSrc} alt="Img data" />
        <A.TextContainer>
          <A.ContainerFirst>
            <A.UserNickname>{nickname}</A.UserNickname>
            <A.FollowButton>팔로우</A.FollowButton>
          </A.ContainerFirst>
          <A.UserId>{userid}</A.UserId>
          <A.UserAbout>{about}</A.UserAbout>
          <A.ContainerThird>
            <A.ContainerSecond>
              <A.UserFollow>팔로워</A.UserFollow>
              <A.UserFollowNumber>{follower}</A.UserFollowNumber>
            </A.ContainerSecond>
            <A.ContainerSecond>
              <A.UserFollow>팔로잉</A.UserFollow>
              <A.UserFollowNumber>{following}</A.UserFollowNumber>
            </A.ContainerSecond>
          </A.ContainerThird>
        </A.TextContainer>
      </A.ProfileContainer>
    </A.CenteredContainer>
  );
};

export default Profile;
