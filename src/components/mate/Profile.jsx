import * as A from './Profile.style';
import userImg from '@/assets/images/userImg.png';

const Profile = () => {
  return (
    <A.CenteredContainer>
      <A.ProfileContainer>
        <A.UserImg src={userImg} alt="Img data" />
        <A.TextContainer>
          <A.ContainerFirst>
            <A.UserNickname>샐리</A.UserNickname>
            <A.FollowButton>팔로우</A.FollowButton>
          </A.ContainerFirst>
          <A.UserId>@sally</A.UserId>
          <A.UserAbout>
            특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이
          </A.UserAbout>
          <A.ContainerThird>
            <A.ContainerSecond>
              <A.UserFollow>팔로워</A.UserFollow>
              <A.UserFollowNumber>23</A.UserFollowNumber>
            </A.ContainerSecond>
            <A.ContainerSecond>
              <A.UserFollow>팔로잉</A.UserFollow>
              <A.UserFollowNumber>32</A.UserFollowNumber>
            </A.ContainerSecond>
          </A.ContainerThird>
        </A.TextContainer>
      </A.ProfileContainer>

      <A.ProfileContainer>
        <A.UserImg src={userImg} alt="Img data" />
        <A.TextContainer>
          <A.ContainerFirst>
            <A.UserNickname>샐리</A.UserNickname>
            <A.FollowButton>팔로우</A.FollowButton>
          </A.ContainerFirst>
          <A.UserId>@sally</A.UserId>
          <A.UserAbout>
            특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이
          </A.UserAbout>
          <A.ContainerThird>
            <A.ContainerSecond>
              <A.UserFollow>팔로워</A.UserFollow>
              <A.UserFollowNumber>23</A.UserFollowNumber>
            </A.ContainerSecond>
            <A.ContainerSecond>
              <A.UserFollow>팔로잉</A.UserFollow>
              <A.UserFollowNumber>32</A.UserFollowNumber>
            </A.ContainerSecond>
          </A.ContainerThird>
        </A.TextContainer>
      </A.ProfileContainer>
    </A.CenteredContainer>
  );
};

export default Profile;
