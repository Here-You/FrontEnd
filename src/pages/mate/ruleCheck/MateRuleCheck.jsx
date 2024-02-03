import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MateRuleCheck.style';
import TeamContainer from '@/components/mate/TeamContainer';
import { useTeamRuleList } from '@/hooks/mate/useTeamRuleList';

const MateRuleCheckPage = () => {
  const userId = '1'; //임의로 지정
  const { data: RulesData, loading, error } = useTeamRuleList(userId);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('x-access-token', 'adsadsfasdfasdf');
  });

  const handleClick = ruleId => {
    navigate(`/mate/rule-check/${ruleId}`);
  };

  return (
    <div>
      <S.CenteredContainer>
        <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
        {RulesData.map((ruleData, index) => (
          <TeamContainer
            key={index}
            ruleData={ruleData}
            onClick={() => handleClick(ruleData._id)}
          />
        ))}
      </S.CenteredContainer>
    </div>
  );
};

export default MateRuleCheckPage;
