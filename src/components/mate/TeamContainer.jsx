import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import * as S from './TeamContainer.style';
import over from '/images/mate/over.svg';
import Logo from '/images/mypage/MyPageLogo.svg';
import { deleteTeamRuleList } from '@/apis/request/mate';

const TeamContainer = ({ ruleData }) => {
  const navigate = useNavigate();
  if (!ruleData) {
    return <div>데이터가 없습니다.</div>;
  }

  const { id, memberCnt, title, memberPairs, updated } = ruleData;

  const handleDeleteRule = async e => {
    e.stopPropagation();
    try {
      const confirm = window.confirm(
        '정말 참여중인 규칙 방에서 나가시겠습니까?',
      );
      confirm ? deleteTeamRuleList(id) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.TeamContainer onClick={() => navigate(`/mate/rule-check/${id}`)}>
      <S.TeamInfoContainer>
        <S.ImgContainer>
          {memberPairs?.map(({ id, image }, _) => (
            <S.TeammateImg key={id} src={image ? image : Logo} />
          ))}
          {memberCnt >= 4 && <S.OverImg src={over} alt="over" />}
        </S.ImgContainer>
        <S.TeammateNum>{memberCnt}명</S.TeammateNum>
      </S.TeamInfoContainer>

      <S.TeamTitle>{title}</S.TeamTitle>

      <S.ExitContainer>
        <S.ExitButton onClick={handleDeleteRule}>나가기</S.ExitButton>
        <S.WriteDate>{format(updated, 'yy-MM-dd')}</S.WriteDate>
      </S.ExitContainer>
    </S.TeamContainer>
  );
};

export default TeamContainer;
