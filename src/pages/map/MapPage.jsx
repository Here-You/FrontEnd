import { useNavigate } from 'react-router-dom';

import * as S from './Map.style';
import { TravelMap } from '@/components';
import BottomScrollPage from '@/components/bottomSheet/BottomScrollPage';
import testData from '@/constants/journey';

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container $dataLength={testData.length}>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate('/')}>캘린더로 보기</S.Button>
        <S.Button onClick={() => navigate('/map')}>지도로 보기</S.Button>
      </S.ButtonContainer>
      <S.MapContainer>
        <TravelMap />
        <BottomScrollPage />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapPage;
