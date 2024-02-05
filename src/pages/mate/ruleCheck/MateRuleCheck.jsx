import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MateContainer from '../MateContainer';
import * as S from './MateRuleCheck.style';
import { deleteTeamRuleList } from '@/apis/request/mate';
import TeamContainer from '@/components/mate/TeamContainer';
import { useTeamRuleList } from '@/hooks/mate/useTeamRuleList';

const MateRuleCheckPage = () => {
  const { data: RulesData, loading, error } = useTeamRuleList();
  const navigate = useNavigate();

  const handleExitClick = async ruleId => {
    try {
      await deleteTeamRuleList(ruleId);
    } catch (error) {
      setError(e.message || '에러가 발생했습니다.');
    }
  };

  return (
    <MateContainer>
      <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
      {RulesData.map((ruleData, index) => (
        <TeamContainer
          key={index}
          ruleData={ruleData}
          onClick={() => navigate(`/mate/rule-check/${ruleData.id}`)}
          onExitClick={() => handleExitClick(ruleData.id)}
        />
      ))}
    </MateContainer>
  );
};

export default MateRuleCheckPage;
