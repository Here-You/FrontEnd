import toast from 'react-hot-toast';

import * as S from './MateMain.style';
import mateRuleCheckIcon from '/images/mate/mateRule_check.svg';
import mateRuleWriteIcon from '/images/mate/mateRule_write.svg';
import mateManagementIcon from '/images/mate/mate_management.svg';
import mateSearchIcon from '/images/mate/mate_search.svg';
import Card from '@/components/mate/Card';
import useAuth from '@/store/useAuth';

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

const renderCards = (data, isLogin) => {
  return isLogin
    ? data.map(({ id, link, text1, text2, imgSrc }) => (
        <S.LinkTo key={id} to={link}>
          <Card text1={text1} text2={text2} imgSrc={imgSrc} />
        </S.LinkTo>
      ))
    : data.map(({ id, link, text1, text2, imgSrc }) => (
        <S.CardButton
          key={id}
          onClick={() => toast('로그인 후 이용 가능합니다.')}>
          <Card text1={text1} text2={text2} imgSrc={imgSrc} />
        </S.CardButton>
      ));
};

const MateMainPage = () => {
  const { isLogin } = useAuth();
  return (
    <S.Maincontainer>
      <S.SpanWrapper>
        <span>여행의 이유를 함께 찾아볼 친구를 추가해보세요!</span>
      </S.SpanWrapper>

      <S.MenuContainer>
        <S.Title>내 메이트</S.Title>
        <S.Des>나와 함께 여행 할 메이트들을 찾아보세요!</S.Des>
        <S.CardContainer>{renderCards(MY_MATE, isLogin)}</S.CardContainer>
      </S.MenuContainer>

      <S.MenuContainer>
        <S.Title>우리 여행의 규칙은?</S.Title>
        <S.Des>함께 여행할 메이트들과 규칙을 정해보세요!</S.Des>
        <S.CardContainer>{renderCards(OUR_RULE, isLogin)}</S.CardContainer>
      </S.MenuContainer>
    </S.Maincontainer>
  );
};

export default MateMainPage;
