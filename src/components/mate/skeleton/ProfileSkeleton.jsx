import * as S from './ProfileSkeleton.styled';

const ProfileSkeleton = () => {
  return (
    <S.ProfileContainer>
      <S.ProfileImage />
      <S.IntroContainer>
        <S.NickNameContainer>
          <S.NickName />
          <S.FollowButton />
        </S.NickNameContainer>
        <S.InfoContainer />
        <S.CountContainer>
          <S.CountInfoContainer>
            <S.CountInfoText />
          </S.CountInfoContainer>
          <S.CountInfoContainer>
            <S.CountInfoText />
          </S.CountInfoContainer>
        </S.CountContainer>
      </S.IntroContainer>
    </S.ProfileContainer>
  );
};

export default ProfileSkeleton;
