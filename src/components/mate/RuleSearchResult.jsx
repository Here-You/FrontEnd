import * as S from './RuleSearchResult.style';
import mateImg from '/images/mate/mateImg.svg';

const RuleSearchResult = () => {
  return (
    <S.ResultContainer>
      <S.UserImg src={mateImg} alt="프로필" />
      <S.TextContainer>
        <span>신서영</span>
        <span>@orb</span>
        <span>가나다라마바사</span>
      </S.TextContainer>
    </S.ResultContainer>
  );
};
export default RuleSearchResult;
