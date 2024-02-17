import * as S from './DiarySkeleton.style';

const DiarySkeleton = () => {
  return (
    <>
      <S.DiaryCard>
        <S.DiaryImage />
        <S.Title />
        <S.Title />
        <S.EmojiContainer>
          <S.EmojiImage />
          <S.EmojiImage />
        </S.EmojiContainer>
        <S.Date />
        <S.Content />
      </S.DiaryCard>
    </>
  );
};

export default DiarySkeleton;
