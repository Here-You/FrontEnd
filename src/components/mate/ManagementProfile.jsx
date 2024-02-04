import FollowButton from './FollowButton';
import * as S from './ManagementProfile.style';

const ManagementProfile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { _id, image, name, nickname, bio, is_following } = profileData;

  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={image} />

        <S.TextContainer>
          <S.UserName>{name}</S.UserName>
          <S.UserNickName>{nickname}</S.UserNickName>
          <S.UserBio>
            <p>{bio}</p>
          </S.UserBio>
        </S.TextContainer>

        <FollowButton isFollowing={is_following} name={name} />
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;
