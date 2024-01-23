import { useState } from 'react';

import * as S from './FollowButton.style';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <S.FollowButton isFollowing={isFollowing} onClick={handleClick}>
      {isFollowing ? '팔로잉' : '팔로우'}
    </S.FollowButton>
  );
};

export default FollowButton;
