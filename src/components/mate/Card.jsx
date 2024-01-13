import * as A from './Card.style';

const Card = ({ width, text, imgSrc }) => {
  return (
    <div>
      <A.CardWrapper>
        <A.StyledSpan width={width}>{text}</A.StyledSpan>
        <A.StyledImg src={imgSrc} alt={text}></A.StyledImg>
      </A.CardWrapper>
    </div>
  );
};

export default Card;
