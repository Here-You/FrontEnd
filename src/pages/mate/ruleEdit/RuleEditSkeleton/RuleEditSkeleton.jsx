import * as S from './RuleEditSkeleton.style';

const RuleEditSkeleton = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.TitleInput />
          <S.PlusSvg />
        </S.Header>
        <S.Content>
          <S.ContentBox />
          <S.ContentBox />
          <S.ContentBox />
        </S.Content>
        <S.AddButtonWrapper>
          <S.AddQuestionButton />
        </S.AddButtonWrapper>
      </S.Wrapper>
      <S.SubmitBtn />
    </S.Container>
  );
};

export default RuleEditSkeleton;
