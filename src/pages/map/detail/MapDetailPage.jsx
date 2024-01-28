import { useParams } from 'react-router-dom';

import BottomDetailScrollPage from '@/components/bottomSheet/BottomDetailScrollPage';
import TravelMapDetail from '@/components/map/TravelMapDetail';
import { useGetJourneyMap } from '@/hooks/home/useGetJourneyMap';

const MapDetailPage = () => {
  const { journeyId } = useParams();
  const { data, loading, error } = useGetJourneyMap(journeyId);

  return (
    <>
      <TravelMapDetail journeyInfo={data.journey_info} />
      <BottomDetailScrollPage journeyInfo={data.journey_info} />
    </>
  );
};

export default MapDetailPage;
