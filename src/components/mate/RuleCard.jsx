import * as A from './RuleCard.style';

const RuleCard = ({ imgSrc, title, userName }) => {
  return (
    <div>
      <A.CardWrapper>
        <A.StyledImg src={imgSrc} alt={userName}></A.StyledImg>
        <A.StyledTitle>{title}</A.StyledTitle>
        <A.StyledSpan>{userName}님</A.StyledSpan>
      </A.CardWrapper>
    </div>
  );
};

export default RuleCard;
