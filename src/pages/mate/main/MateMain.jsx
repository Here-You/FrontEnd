import * as S from './MateMain.style';
import mateRuleCheckIcon from '/images/mate/mateRule_check.svg';
import mateRuleWriteIcon from '/images/mate/mateRule_write.svg';
import mateManagementIcon from '/images/mate/mate_management.svg';
import mateSearchIcon from '/images/mate/mate_search.svg';
import Card from '@/components/mate/Card';
import Title from '@/components/mate/Title';

const MY_MATE = [
  {
    id: '1',
    link: '/mate/look',
    text1: '메이트',
    text2: '탐색하기',
    imgSrc: mateSearchIcon,
  },
  {
    id: '2',
    link: '/mate/management',
    text1: '메이트',
    text2: '관리하기',
    imgSrc: mateManagementIcon,
  },
];

const OUR_RULE = [
  {
    id: '1',
    link: '/mate/rule-write',
    text1: '여행 규칙',
    text2: '작성하기',
    imgSrc: mateRuleWriteIcon,
  },
  {
    id: '2',
    link: '/mate/rule-check',
    text1: '여행 규칙',
    text2: '확인하기',
    imgSrc: mateRuleCheckIcon,
  },
];

const renderCards = data => {
  return data.map(({ id, link, text1, text2, imgSrc }) => (
    <S.LinkTo key={id} to={link}>
      <Card text1={text1} text2={text2} imgSrc={imgSrc} />
    </S.LinkTo>
  ));
};

const MateMainPage = () => {
  return (
    <>
      <S.SpanWrapper>
        <span>여행의 이유를 함께 찾아줄 친구를</span>
        <span>ID로 추가해보세요!</span>
      </S.SpanWrapper>
      <S.MainContainer>
        <Title text="내 메이트" />
        <S.CardContainer>{renderCards(MY_MATE)}</S.CardContainer>
      </S.MainContainer>

      <S.MainContainer>
        <Title text="우리 여행의 규칙은?" />
        <S.CardContainer>{renderCards(OUR_RULE)}</S.CardContainer>
      </S.MainContainer>
    </>
  );
};

export default MateMainPage;
