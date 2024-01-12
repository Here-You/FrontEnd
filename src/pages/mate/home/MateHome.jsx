import Card from '@/components/mate/Card';
import Title from '@/components/mate/Title';

const MateHomePage = () => {
  return (
    <div>
      <Title text="내 메이트" />
      <Card
        text="새 메이트 탐색하기"
        imgSrc="src/assets/images/mate_search.svg"
      />
      <Card
        text="메이트 관리하기"
        imgSrc="src/assets/images/mate_management.svg"
        width="65px"
      />
      <Title text="내 여행의 규칙은?" />
      <Card
        text="내 여행 규칙 확인하기"
        imgSrc="src/assets/images/mateRule_one.svg"
        width="95px"
      />
      <Card
        text="우리 여행 규칙 확인하기"
        imgSrc="src/assets/images/mateRule_many.svg"
        width="110px"
      />
      <Title text="다른 이용자들의 여행 법칙 구경하기" />
    </div>
  );
};

export default MateHomePage;
