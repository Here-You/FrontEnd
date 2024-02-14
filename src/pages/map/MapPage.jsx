import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import * as S from './Map.style';
import { TravelMap } from '@/components';
import BottomScrollPage from '@/components/bottomSheet/BottomScrollPage';
import MapSkeleton from '@/components/map/skeleton/MapSkeleton';
import testData from '@/constants/journey';
import { useMonthlyJourney } from '@/hooks/home/useMonthlyJourney';

const MapPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const accessToken = localStorage.getItem('x-access-token');
  const [searchParams, setSearchParams] = useSearchParams();
  const year = parseInt(searchParams.get('year')) || 2024;
  const month = parseInt(searchParams.get('month')) || 2;
  const { data, loading: MapLoading, error } = useMonthlyJourney(year, month);
  let mapDataList = [];
  data?.forEach(journey => {
    mapDataList = mapDataList.concat(journey.map);
  });

  return (
    <>
      {MapLoading ? (
        <MapSkeleton />
      ) : (
        <S.Container $dataLength={testData.length}>
          <S.ButtonContainer>
            <S.Button
              clicked={pathname === '/calender'}
              onClick={() => navigate('/calendar')}>
              캘린더로 보기
            </S.Button>
            <S.Button
              $clicked={pathname === '/map'}
              onClick={() => navigate('/map')}>
              지도로 보기
            </S.Button>
          </S.ButtonContainer>
          <S.MapContainer>
            <TravelMap mapDataList={mapDataList} />
            {accessToken ? (
              <BottomScrollPage />
            ) : (
              <Link style={{ textDecoration: 'none' }} to={'/login'}>
                <S.IntroMessage>
                  로그인 후 지도에서 여정을 확인해보세요!
                </S.IntroMessage>
              </Link>
            )}
          </S.MapContainer>
        </S.Container>
      )}
    </>
  );
};

export default MapPage;
