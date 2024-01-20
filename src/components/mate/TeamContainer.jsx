import * as S from './TeamContainer.style';

const TeamContainer = () => {
  return (
    <S.TeamContainer>
      <S.TeamInfoContainer>
        <S.TeamInfo>
          <S.TeammateImg src="/images/userImg.png" />
          <S.TeammateNum>5명</S.TeammateNum>
        </S.TeamInfo>
        <S.TeammateName>신서영, 김지아</S.TeammateName>
      </S.TeamInfoContainer>

      <S.TeamTitle>제주여행을 하며</S.TeamTitle>

      <S.ExitContainer>
        <S.ExitButton>나가기</S.ExitButton>
        <S.WriteDate>23.12.20</S.WriteDate>
      </S.ExitContainer>
    </S.TeamContainer>
  );
};

export default TeamContainer;
