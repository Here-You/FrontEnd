import * as S from './MateRuleDetailSkeleton.style';

const MateRuleDetailSkeleton = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title />
          <S.ProfileContainer>
            <S.ProfileBox>
              <S.ProfileImages />
              <S.Title />
            </S.ProfileBox>
          </S.ProfileContainer>
        </S.Header>
        <S.Content>
          {new Array(5).fill(0).map(() => (
            <S.TextContainer>
              <S.Text />
              <S.Text />
            </S.TextContainer>
          ))}
        </S.Content>
      </S.Wrapper>
      <S.UpdateBtn />
    </S.Container>
  );
};

export default MateRuleDetailSkeleton;
