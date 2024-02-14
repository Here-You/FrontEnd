import { useParams } from 'react-router-dom';

import * as S from './MapDetail.style';
import { BottomJourneyDetailScrollPage } from '@/components';
import TravelMapDetail from '@/components/map/TravelMapDetail';
import MapSkeleton from '@/components/map/skeleton/MapSkeleton';
import { useGetJourneyMap } from '@/hooks/home/useGetJourneyMap';

const MapDetailPage = () => {
  const { journeyId } = useParams();
  const {
    data,
    loading: journeyMapLoading,
    error,
  } = useGetJourneyMap(journeyId);

  if (error) {
    return <h1>에러가 발생했습니다...</h1>;
  }

  return (
    <>
      {journeyMapLoading ? (
        <MapSkeleton />
      ) : (
        <S.Container>
          <TravelMapDetail journeyInfo={data} />
          <BottomJourneyDetailScrollPage journeyInfo={data} />
        </S.Container>
      )}
    </>
  );
};

export default MapDetailPage;
