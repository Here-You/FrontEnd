import { useState } from 'react';

import FollowBox from './FollowBox';
import FollowButton from './FollowButton';
import * as S from './Profile.style';

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { image, name, nickname, bio, follower_num, following_num } =
    profileData;

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={image} alt="Img" />
        <S.TextContainer>
          <S.NameAndFollow>
            <span>{name}</span>
            <FollowButton
              isFollowing={isFollowing}
              onFollowing={handleFollowing}
              name={name}
            />
          </S.NameAndFollow>
          <S.UserId>{nickname}</S.UserId>
          <S.UserAbout>{bio}</S.UserAbout>
          <S.FollowContainer>
            <FollowBox text="팔로워" num={follower_num} />
            <FollowBox text="팔로잉" num={following_num} />
          </S.FollowContainer>
        </S.TextContainer>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default Profile;
