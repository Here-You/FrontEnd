import * as S from './RuleButton.style';

const RuleButton = ({ text }) => {
  return (
    <S.WriteButton>
      <span>{text}</span>
    </S.WriteButton>
  );
};

export default RuleButton;
