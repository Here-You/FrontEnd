import * as S from './ManagementProfile.style';

const ManagementProfile = ({ profileData }) => {
  const { email, image, introduction, isFollowing, mateId, nickName } =
    profileData;
  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={image} />
        <S.TextContainer>
          <S.UserName>{nickName}</S.UserName>
          <S.UserNickName>{email}</S.UserNickName>
          <S.UserBio>{introduction}</S.UserBio>
        </S.TextContainer>
        <S.Wrapper>
          {/* mateId, mate.isFollowing */}
          <div>팔로우버튼</div>
        </S.Wrapper>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;

{
}
