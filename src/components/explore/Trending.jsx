import Preview from './Preview';
import * as S from './Trending.style';

export default function Trending({ data }) {
  return (
    <S.PageContainer>
      <S.Title>인기 급상승 시그니처🔥</S.Title>
      <S.PreviewContainer>
        {data?.map((d, _) => {
          return <Preview key={d._id} data={d} />;
        })}
      </S.PreviewContainer>
    </S.PageContainer>
  );
}
