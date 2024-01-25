import * as S from './RuleBox.style';

const RuleBox = ({ title, setTitle, content, setContent, handleClick }) => {
  return (
    <S.InputContainer>
      <S.Topcontainer>
        <S.LineWrapper>
          <S.StyledTitle
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <S.PlusButton onClick={handleClick} />
        </S.LineWrapper>
        <S.Participant />
      </S.Topcontainer>
      <S.InputBox value={content} onChange={e => setContent(e.target.value)} />
    </S.InputContainer>
  );
};

export default RuleBox;
