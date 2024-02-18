import * as S from './NoDiaryPage.style';
import diary from '/images/diary.webp';

const NoDiaryPage = () => {
  return (
    <S.Container>
      <S.ContentContainer to={'/calendar'}>
        <S.Image src={diary} />
        <S.Content>
          <p>
            일정 탭에서 <span>새로운 여정</span>을 등록하고{'\n'}
          </p>
          <p>
            {' '}
            <span>하루 일지</span>를 작성해보세요!
          </p>
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default NoDiaryPage;
