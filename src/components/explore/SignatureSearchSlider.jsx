import Preview from './Preview';
import * as S from './SignatureSearchSlider.style';

const SignatureSearchSlider = ({ data, type, searchTerm }) => {
  return (
    <S.PageContainer>
      {type === 'hot' ? (
        <S.Title>인기 급상승 시그니처🔥</S.Title>
      ) : type === 'new' ? (
        <S.Title>최신 시그니처🔥</S.Title>
      ) : (
        <S.Title>{searchTerm}에 관한 시그니처🔥</S.Title>
      )}
      <S.PreviewContainer>
        {data?.length === 0 ? (
          <S.EmptyContainer>
            <h1>해당 검색어에 해당하는 컨텐츠가 없습니다.</h1>
            <h3>먼저, 작성해보시는건 어떠신가요?</h3>
          </S.EmptyContainer>
        ) : (
          data?.map((d, _) => {
            return <Preview key={d._id} data={d} />;
          })
        )}
      </S.PreviewContainer>
    </S.PageContainer>
  );
};

export default SignatureSearchSlider;
