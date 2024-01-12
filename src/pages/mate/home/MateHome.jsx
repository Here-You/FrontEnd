import * as A from './MateHome.style';
import Card from '@/components/mate/Card';
import RuleCard from '@/components/mate/RuleCard';
import Title from '@/components/mate/Title';

const MateHomePage = () => {
  return (
    <div>
      <A.MainContainer>
        <Title text="내 메이트" />
        <A.CardContainer>
          <A.LinkTo to="/mate/search">
            <Card
              text="새 메이트 탐색하기"
              imgSrc="src/assets/images/mate_search.svg"
            />
          </A.LinkTo>
          <A.LinkTo to="/mate/management">
            <Card
              text="메이트 관리하기"
              imgSrc="src/assets/images/mate_management.svg"
              width="65px"
            />
          </A.LinkTo>
        </A.CardContainer>
      </A.MainContainer>

      <A.MainContainer>
        <Title text="내 여행의 규칙은?" />
        <A.CardContainer>
          <A.LinkTo to="">
            <Card
              text="내 여행 규칙 확인하기"
              imgSrc="src/assets/images/mateRule_one.svg"
              width="95px"
            />
          </A.LinkTo>
          <A.LinkTo to="">
            <Card
              text="우리 여행 규칙 확인하기"
              imgSrc="src/assets/images/mateRule_many.svg"
              width="110px"
            />
          </A.LinkTo>
        </A.CardContainer>
      </A.MainContainer>

      <A.MainContainer>
        <Title text="다른 이용자들의 여행 법칙 구경하기" />
        <A.RuleCardContainer>
          <A.LinkTo to="">
            <RuleCard
              imgSrc="src/assets/images/1.jpg"
              title="일부러 길을 잃어요."
              userName="강다빈"
            />
          </A.LinkTo>
          <RuleCard
            imgSrc="src/assets/images/2.jpg"
            title="행운의 양말 한 켤레"
            userName="강다빈"
          />
          <RuleCard
            imgSrc="src/assets/images/2.jpg"
            title="행운의 양말 한 켤레"
            userName="강다빈"
          />
        </A.RuleCardContainer>
      </A.MainContainer>
    </div>
  );
};

export default MateHomePage;
