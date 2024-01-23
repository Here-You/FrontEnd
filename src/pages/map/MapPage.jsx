import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Map.style';
import { TravelMap } from '@/components';
import BottomScrollPage from '@/components/bottomSheet/BottomScrollPage';
import testData from '@/constants/journey';

const MapPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Container $dataLength={testData.length}>
      <S.ButtonContainer>
        <S.Button clicked={pathname === '/'} onClick={() => navigate('/')}>
          캘린더로 보기
        </S.Button>
        <S.Button
          clicked={pathname === '/map'}
          onClick={() => navigate('/map')}>
          지도로 보기
        </S.Button>
      </S.ButtonContainer>
      <S.MapContainer>
        <TravelMap />
        <BottomScrollPage />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapPage;