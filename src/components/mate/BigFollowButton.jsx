import * as S from './FollowButton.style';

const BigFollowButton = ({ isFollowing, onFollowing }) => {
  return (
    <S.FollowButton isFollowing={isFollowing} onClick={onFollowing}>
      {isFollowing ? '팔로잉' : '팔로우'}
    </S.FollowButton>
  );
};

export default BigFollowButton;
