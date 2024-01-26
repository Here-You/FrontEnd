import * as S from './RuleBox.style';

const RuleBox = ({
  title,
  setTitle,
  content,
  setContent,
  handleClick,
  selectedProfile,
}) => {
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
        <S.Participant>
          {selectedProfile && (
            <>
              <img src={selectedProfile.image} alt="프로필 이미지" />
              <span>{selectedProfile.name}</span>
            </>
          )}
        </S.Participant>
      </S.Topcontainer>
      <S.InputBox value={content} onChange={e => setContent(e.target.value)} />
    </S.InputContainer>
  );
};

export default RuleBox;
