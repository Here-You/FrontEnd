import * as S from './ManagementProfileSkeleton.style';

const ManagementProfileSkeleton = () => {
  return (
    <S.CenteredContainer>
      <S.ProfileContainer>
        <S.UserImg />
        <S.TextContainer>
          <S.UserName />
          <S.UserNickName />
          <S.UserBio />
        </S.TextContainer>
        <S.Wrapper>
          <S.Button />
        </S.Wrapper>
      </S.ProfileContainer>
    </S.CenteredContainer>
  );
};

export default ManagementProfileSkeleton;
