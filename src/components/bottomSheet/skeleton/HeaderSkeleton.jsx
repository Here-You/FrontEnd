import * as S from './HeaderSkeleton.style';

const HeaderSkeleton = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Title />
        <S.DateContainer>
          <S.Content />
          <S.Content />
        </S.DateContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default HeaderSkeleton;
