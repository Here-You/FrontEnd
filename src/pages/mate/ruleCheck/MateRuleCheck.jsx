import MateContainer from '../MateContainer';
import * as S from './MateRuleCheck.style';
import { getTeamRuleList } from '@/apis/request/mate';
import TeamContainer from '@/components/mate/TeamContainer';
import { useGetTeamRuleList } from '@/hooks/mate/queries/useGetTeamRuleList';
import { ErrorPage } from '@/pages';

const MateRuleCheckPage = () => {
  const { data, isPending, isError } = useGetTeamRuleList();
  const rulesData = data?.data?.data;
  console.log(rulesData);
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <MateContainer>
      <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
      {rulesData?.map((ruleData, _) => (
        <TeamContainer key={ruleData.id} ruleData={ruleData} />
      ))}
    </MateContainer>
  );
};

export default MateRuleCheckPage;
