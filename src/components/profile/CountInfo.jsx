import * as S from './CountInfo.style';

const CountInfo = ({ title, count }) => {
  return (
    <S.Container>
      <h3>{title}</h3>
      <h4>{count}</h4>
    </S.Container>
  );
};

export default CountInfo;
