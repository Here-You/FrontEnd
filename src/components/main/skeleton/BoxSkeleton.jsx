import * as S from './BoxSkeleton.style';

const BoxSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextContainer>
          <S.Text1 />
          <S.Text1 />
        </S.TextContainer>
        <S.Icon />
      </S.Container>
    </S.Wrapper>
  );
};

export default BoxSkeleton;
