import FollowButton from './FollowButton';
import * as S from './ManagementProfile.style';
import Logo from '/images/mypage/MyPageLogo.svg';

const ManagementProfile = ({ profileData }) => {
  const { email, image, introduction, isFollowing, mateId, nickName } =
    profileData;
  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg src={image ? image : Logo} />
        <S.TextContainer>
          <S.UserName>{nickName}</S.UserName>
          <S.UserNickName>{email}</S.UserNickName>
          {introduction && <S.UserBio>{introduction}</S.UserBio>}
        </S.TextContainer>
        <S.Wrapper>
          <FollowButton initialFollowState={isFollowing} id={mateId} />
        </S.Wrapper>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfile;
