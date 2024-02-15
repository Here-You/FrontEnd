import Preview from './Preview';
import * as S from './SignatureSearchSlider.style';

const SignatureSearchSlider = ({ data, type, searchTerm }) => {
  console.log(data);
  return (
    <S.PageContainer>
      {type === 'hot' ? (
        <S.Title>인기 급상승 시그니처🔥</S.Title>
      ) : type === 'new' ? (
        <S.Title>최신 시그니처🔥</S.Title>
      ) : (
        <S.Title>"{searchTerm}" 에 관한 시그니처⭐</S.Title>
      )}
      <S.PreviewContainer>
        {data?.length === 0 ? (
          <S.EmptyContainer>
            <S.Text>해당 검색어에 해당하는 컨텐츠가 없습니다.</S.Text>
            <S.Text>가장 먼저 해당 키워드의 작성자가 되어보세요!</S.Text>
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
