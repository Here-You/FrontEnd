import { useParams } from 'react-router-dom';

import MateContainer from '../MateContainer';
import RuleBoxCheck from '@/components/mate/RuleBoxCheck';
import RuleComments from '@/components/mate/RuleComments';
import { useTeamMateRule } from '@/hooks/mate/useTeamMateRule';

const MateRuleDetailCheckPage = () => {
  const { ruleId } = useParams();
  const { data, loading, error } = useTeamMateRule(ruleId);
  console.log(data);

  return (
    <MateContainer>
      <RuleBoxCheck
        ruleboxData={data?.rule_box}
        participantsData={data?.participants}
      />
      <RuleComments
        userImage={data?.user_image}
        commentsData={data?.comments}
      />
    </MateContainer>
  );
};

export default MateRuleDetailCheckPage;
