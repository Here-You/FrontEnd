import { useParams } from 'react-router-dom';

import * as S from './JourneyDetail.style';
import BottomDetailScrollPage from '@/components/bottomSheet/BottomDetailScrollPage';
import TravelMapDetail from '@/components/map/TravelMapDetail';
import { useGetJourneyMap } from '@/hooks/home/useGetJourneyMap';

const JourneyDetailPage = () => {
  const { journeyId } = useParams();
  const { data, loading, error } = useGetJourneyMap(journeyId);

  if (loading) {
    return <h1>로딩중입니다...</h1>;
  }

  return (
    <S.Container>
      <TravelMapDetail journeyInfo={data} />
      <BottomDetailScrollPage
        startDate={data?.journey?.startDate}
        endDate={data?.journey?.endDate}
      />
    </S.Container>
  );
};

export default JourneyDetailPage;
