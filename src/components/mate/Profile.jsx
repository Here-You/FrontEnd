import FollowButton from './FollowButton';
import * as S from './Profile.style';

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const {
    _id,
    image,
    name,
    nickname,
    bio,
    follower_num,
    following_num,
    is_following,
  } = profileData;

  return (
    <S.ProfileContainer>
      <S.UserImg src={image} alt="Img" />
      <S.TextContainer>
        <S.NameAndFollow>
          <span>{name}</span>
          <FollowButton isFollowing={is_following} name={name} followId={_id} />
        </S.NameAndFollow>
        <S.UserId>{nickname}</S.UserId>
        <S.UserAbout>{bio}</S.UserAbout>
        <S.FollowContainer>
          <S.FollowSection>
            <S.UserFollow>팔로워</S.UserFollow>
            <S.UserFollowNumber>{follower_num}</S.UserFollowNumber>
          </S.FollowSection>
          <S.FollowSection>
            <S.UserFollow>팔로잉</S.UserFollow>
            <S.UserFollowNumber>{following_num}</S.UserFollowNumber>
          </S.FollowSection>
        </S.FollowContainer>
      </S.TextContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
