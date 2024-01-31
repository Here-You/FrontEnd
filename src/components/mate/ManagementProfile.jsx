import FollowButton from './FollowButton';
import * as S from './ManagementProfile.style';

const ManagementProfile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { image, name, nickname, bio, is_following } = profileData;

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
          <FollowButton isFollowing={is_following} name={name} />
        </S.Wrapper>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;
