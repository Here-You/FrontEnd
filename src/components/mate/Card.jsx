import * as S from './Card.style';

const Card = ({ text1, text2, imgSrc }) => {
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.StyledSpan>{text1}</S.StyledSpan>
        <S.StyledSpan>{text2}</S.StyledSpan>
      </S.TextContainer>
      <S.StyledImg src={imgSrc} alt={text1}></S.StyledImg>
    </S.CardContainer>
  );
};

export default Card;
