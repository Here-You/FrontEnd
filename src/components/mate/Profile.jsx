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
          <S.ContainerFirst>
            <S.UserNickname>{nickname}</S.UserNickname>
            <S.FollowButton>팔로우</S.FollowButton>
          </S.ContainerFirst>
          <S.UserId>{userid}</S.UserId>
          <S.UserAbout>{about}</S.UserAbout>
          <S.ContainerThird>
            <S.ContainerSecond>
              <S.UserFollow>팔로워</S.UserFollow>
              <S.UserFollowNumber>{follower}</S.UserFollowNumber>
            </S.ContainerSecond>
            <S.ContainerSecond>
              <S.UserFollow>팔로잉</S.UserFollow>
              <S.UserFollowNumber>{following}</S.UserFollowNumber>
            </S.ContainerSecond>
          </S.ContainerThird>
        </S.TextContainer>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default Profile;
