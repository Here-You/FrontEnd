import { useNavigate } from 'react-router-dom';

import MateContainer from '../MateContainer';
import * as S from './MateRuleCheck.style';
import TeamContainer from '@/components/mate/TeamContainer';
import { useTeamRuleList } from '@/hooks/mate/useTeamRuleList';

const MateRuleCheckPage = () => {
  const { data: rulesData, loading, error } = useTeamRuleList();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <MateContainer>
      <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
      {rulesData.map((ruleData, _) => (
        <TeamContainer
          key={ruleData.id}
          ruleData={ruleData}
          onClick={e => {
            navigate(`/mate/rule-check/${ruleData.id}}`);
          }}
        />
      ))}
    </MateContainer>
  );
};

export default MateRuleCheckPage;
