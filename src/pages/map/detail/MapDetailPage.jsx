import { useParams } from 'react-router-dom';

import { TravelMap } from '@/components';
import BottomDetailScrollPage from '@/components/bottomSheet/BottomDetailScrollPage';
import { useGetJourneyMap } from '@/hooks/home/useGetJourneyMap';

const MapDetailPage = () => {
  const { journeyId } = useParams();
  console.log(journeyId);
  const { data, loading, error } = useGetJourneyMap(journeyId);
  console.log(data);

  return (
    <>
      <TravelMap journeyInfo={data.journey_info} />
      <BottomDetailScrollPage journeyInfo={data.journey_info} />
    </>
  );
};

export default MapDetailPage;
