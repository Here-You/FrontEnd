import { useState } from 'react';

import BigFollowButton from './BigFollowButton';
import * as S from './ManagementProfile.style';

const ManagementProfile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { image, name, nickname, bio } = profileData;
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={image} />
        <S.TextContainer>
          <S.UserName>{name}</S.UserName>
          <S.UserNickName>{nickname}</S.UserNickName>
          <S.UserBio>{bio}</S.UserBio>
        </S.TextContainer>
        <S.Wrapper>
          <BigFollowButton
            isFollowing={isFollowing}
            onFollowing={handleFollowing}
          />
        </S.Wrapper>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;
