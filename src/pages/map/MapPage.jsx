import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import * as S from './Map.style';
import { TravelMap } from '@/components';
import BottomScrollPage from '@/components/bottomSheet/BottomScrollPage';
import testData from '@/constants/journey';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';

const MapPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const year = parseInt(searchParams.get('year')) || 2024;
  const month = parseInt(searchParams.get('month')) || 2;
  const { data, loading, error } = useMonthlyJourney(year, month);
  let mapDataList = [];
  data.forEach(journey => {
    mapDataList = mapDataList.concat(journey.map);
  });

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
        <TravelMap mapDataList={mapDataList} />
        <BottomScrollPage />
      </S.MapContainer>
    </S.Container>
  );
};

export default MapPage;
