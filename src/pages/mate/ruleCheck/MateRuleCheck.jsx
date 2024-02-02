import { useNavigate } from 'react-router-dom';

import * as S from './MateRuleCheck.style';
import TeamContainer from '@/components/mate/TeamContainer';
import { useTeamMateRule } from '@/hooks/mate/useTeamMateRule';

const MateRuleCheckPage = () => {
  const { data: RulesData, loading, error } = useTeamMateRule();
  // const navigate = useNavigate();

  // const handleClick = ruleId => {
  //   navigate(`/mate/rule-check/${ruleId}`);
  // };

  return (
    <div>
      <S.CenteredContainer>
        <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
        {RulesData.map((ruleData, index) => (
          <TeamContainer
            key={index}
            ruleData={ruleData}
            // onClick={() => handleClick(ruleData.rule_box._id)}
          />
        ))}
      </S.CenteredContainer>
    </div>
  );
};

export default MateRuleCheckPage;
