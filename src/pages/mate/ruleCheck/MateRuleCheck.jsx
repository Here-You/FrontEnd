import MateContainer from '../MateContainer';
import * as S from './MateRuleCheck.style';
import MateRuleCheckSkeleton from './MateRuleSkeleton/MateRuleCheckSkeleton';
import TeamContainer from '@/components/mate/TeamContainer';
import { useGetTeamRuleList } from '@/hooks/mate/queries/useGetTeamRuleList';
import { ErrorPage } from '@/pages';

const MateRuleCheckPage = () => {
  const { data, isPending, isError } = useGetTeamRuleList();
  const rulesData = data?.data?.data;

  if (isPending) {
    return (
      <MateContainer>
        <S.SkeletonTitle />
        {new Array(5).fill(0).map(() => (
          <MateRuleCheckSkeleton />
        ))}
      </MateContainer>
    );
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
