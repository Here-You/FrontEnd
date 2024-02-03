import { useParams } from 'react-router-dom';

import * as S from './MateRuleDetailCheck.style';
import RuleBoxCheck from '@/components/mate/RuleBoxCheck';
import RuleComments from '@/components/mate/RuleComments';
import { useTeamMateRule } from '@/hooks/mate/useTeamMateRule';

const MateRuleDetailCheckPage = () => {
  const { ruleId } = useParams();
  console.log(ruleId);
  const { data: RuleboxData, loading, error } = useTeamMateRule(ruleId);
  const { main_title, rules, participants, user_image, comments } = RuleboxData;

  return (
    <span>ok</span>
    // <S.CenteredContainer>
    //   <RuleBoxCheck
    //     mainTitle={main_title}
    //     rules={rules}
    //     participants={participants}
    //   />
    //   <RuleComments userImage={user_image} comments={comments} />
    // </S.CenteredContainer>
  );
};

export default MateRuleDetailCheckPage;
