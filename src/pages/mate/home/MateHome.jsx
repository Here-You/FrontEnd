import Card from '@/components/mate/Card';

const MateHomePage = () => {
  return (
    <div>
      <Card
        text="새 메이트 탐색하기"
        imgSrc="src/assets/images/mate_search.svg"
      />
      <Card
        text="메이트 관리하기"
        imgSrc="src/assets/images/mate_management.svg"
        width="65px"
      />
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
    </div>
  );
};

export default MateHomePage;
