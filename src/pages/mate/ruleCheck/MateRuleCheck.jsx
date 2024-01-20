import * as S from './MateRuleCheck.style';
import TeamContainer from '@/components/mate/TeamContainer';

const MateRuleCheckPage = () => {
  return (
    <div>
      <S.CenteredContainer>
        <S.StyledTitle>내가 참여 중인 규칙</S.StyledTitle>
        <TeamContainer />
        <TeamContainer />
      </S.CenteredContainer>
    </div>
  );
};

export default MateRuleCheckPage;
