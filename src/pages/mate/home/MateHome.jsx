import * as A from './MateHome.style';
import mateRuleCheckIcon from '@/assets/images/mateRule_check.svg';
import mateRuleWriteIcon from '@/assets/images/mateRule_write.svg';
import mateManagementIcon from '@/assets/images/mate_management.svg';
import mateSearchIcon from '@/assets/images/mate_search.svg';
import Card from '@/components/mate/Card';
import Search from '@/components/mate/Search';
import Title from '@/components/mate/Title';

const MateHomePage = () => {
  return (
    <div>
      <Search />
      <A.SpanContainer>
        <A.styledSpan>
          여행의 이유를 함께 찾아줄 친구를 ID로 추가해보세요!
        </A.styledSpan>
      </A.SpanContainer>

      <A.MainContainer>
        <Title text="내 메이트" />
        <A.CardContainer>
          <A.LinkTo to="/mate/look">
            <Card text="메이트 탐색하기" imgSrc={mateSearchIcon} />
          </A.LinkTo>
          <A.LinkTo to="/mate/management">
            <Card text="메이트 관리" imgSrc={mateManagementIcon} />
          </A.LinkTo>
        </A.CardContainer>
      </A.MainContainer>

      <A.MainContainer>
        <Title text="우리 여행의 규칙은?" />
        <A.CardContainer>
          <A.LinkTo to="">
            <Card
              text="여행 규칙 작성하기"
              imgSrc={mateRuleWriteIcon}
              width="90px"
            />
          </A.LinkTo>
          <A.LinkTo to="">
            <Card
              text="여행 규칙 확인하기"
              imgSrc={mateRuleCheckIcon}
              width="90px"
            />
          </A.LinkTo>
        </A.CardContainer>
      </A.MainContainer>
    </div>
  );
};

export default MateHomePage;
