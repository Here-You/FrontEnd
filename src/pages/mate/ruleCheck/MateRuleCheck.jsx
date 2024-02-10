import MateContainer from '../MateContainer';
import * as S from './MateRuleCheck.style';
import TeamContainer from '@/components/mate/TeamContainer';
import { useTeamRuleList } from '@/hooks/mate/useTeamRuleList';
import { ErrorPage } from '@/pages';

const MateRuleCheckPage = () => {
  const { data: rulesData, loading, error } = useTeamRuleList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
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
