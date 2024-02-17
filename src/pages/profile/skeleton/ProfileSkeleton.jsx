import * as S from './ProfileSkeleton.style';

const ProfileSkeleton = () => {
  return (
    <>
      <S.ProfileContainer>
        <S.InfoContainer>
          <S.ProfileImageContainer>
            <S.ProfileImage />
            <S.IntroContainer>
              <S.TextContainer>
                <S.Text />
                <S.Button />
              </S.TextContainer>
              <S.Intro />
            </S.IntroContainer>
          </S.ProfileImageContainer>

          <S.CountContainer>
            <S.Text />
            <S.Text />
            <S.Text />
          </S.CountContainer>
        </S.InfoContainer>
      </S.ProfileContainer>

      <S.GridContainer>
        {new Array(20).fill(0).map(() => (
          <S.ImageContainer>
            <S.Image />
            <S.DescriptionContainer />
          </S.ImageContainer>
        ))}
      </S.GridContainer>
    </>
  );
};

export default ProfileSkeleton;
