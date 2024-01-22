import * as S from './ManagementProfile.style';

const ManagementProfile = ({ profileData }) => {
  if (!profileData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { imgSrc, nickName, userId, about } = profileData;

  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={imgSrc} />
        <S.TextContainer>
          <S.UserNickname>{nickName}</S.UserNickname>
          <S.UserId>{userId}</S.UserId>
          <S.UserAbout>{about}</S.UserAbout>
        </S.TextContainer>
        <S.FollowButton>
          <span>팔로우</span>
        </S.FollowButton>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;
