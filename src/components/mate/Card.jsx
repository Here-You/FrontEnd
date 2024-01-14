import * as S from './Card.style';

const Card = ({ width, text, imgSrc }) => {
  return (
    <S.CardContainer>
      <S.StyledSpan width={width}>{text}</S.StyledSpan>
      <S.StyledImg src={imgSrc} alt={text}></S.StyledImg>
    </S.CardContainer>
  );
};

export default Card;
