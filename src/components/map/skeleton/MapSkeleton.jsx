import * as S from './MapSkeleton.style';

const MapSkeleton = () => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Button />
        <S.Button />
      </S.ButtonContainer>
      <S.MapContainer>
        <S.MapContainer />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapSkeleton;
