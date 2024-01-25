import * as S from './MateMain.style';
import mateRuleCheckIcon from '/images/mate/mateRule_check.svg';
import mateRuleWriteIcon from '/images/mate/mateRule_write.svg';
import mateManagementIcon from '/images/mate/mate_management.svg';
import mateSearchIcon from '/images/mate/mate_search.svg';
import Card from '@/components/mate/Card';
import Title from '@/components/mate/Title';

const MateMainPage = () => {
  return (
    <div>
      <S.SpanWrapper>
        <span>여행의 이유를 함께 찾아줄 친구를</span>
        <span>ID로 추가해보세요!</span>
      </S.SpanWrapper>

      <S.MainContainer>
        <Title text="내 메이트" />
        <S.CardContainer>
          <S.LinkTo to="/mate/look">
            <Card text1="메이트" text2="탐색하기" imgSrc={mateSearchIcon} />
          </S.LinkTo>
          <S.LinkTo to="/mate/management">
            <Card text1="메이트" text2="관리하기" imgSrc={mateManagementIcon} />
          </S.LinkTo>
        </S.CardContainer>
      </S.MainContainer>

      <S.MainContainer>
        <Title text="우리 여행의 규칙은?" />
        <S.CardContainer>
          <S.LinkTo to="/mate/rule-write">
            <Card
              text1="여행 규칙"
              text2="작성하기"
              imgSrc={mateRuleWriteIcon}
            />
          </S.LinkTo>
          <S.LinkTo to="/mate/rule-check">
            <Card
              text1="여행 규칙"
              text2="확인하기"
              imgSrc={mateRuleCheckIcon}
            />
          </S.LinkTo>
        </S.CardContainer>
      </S.MainContainer>
    </div>
  );
};

export default MateMainPage;
