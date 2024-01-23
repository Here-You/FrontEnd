import * as S from './Mate.style';
import mateRuleCheckIcon from '/images/mateRule_check.svg';
import mateRuleWriteIcon from '/images/mateRule_write.svg';
import mateManagementIcon from '/images/mate_management.svg';
import mateSearchIcon from '/images/mate_search.svg';
import Card from '@/components/mate/Card';
import Search from '@/components/mate/Search';
import Title from '@/components/mate/Title';

const MatePage = () => {
  return (
    <div>
      <Search />
      <S.SpanWrapper>
        <span>여행의 이유를 함께 찾아줄 친구를 ID로 추가해보세요!</span>
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
          <S.LinkTo to="">
            <Card
              text1="여행 규칙"
              text2="작성하기"
              imgSrc={mateRuleWriteIcon}
            />
          </S.LinkTo>
          <S.LinkTo to="">
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

export default MatePage;
