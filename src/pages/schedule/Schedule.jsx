import * as S from './Schedule.style';
import { Journey, TravelCalendar } from '@/components';
import testData from '@/constants/journey';

const SchedulePage = () => {
  return (
    <S.Container $dataLength={testData.length}>
      <TravelCalendar />
      <div>
        {testData.map(item => (
          <Journey key={item.id} data={item} dataLength={testData.length} />
        ))}
      </div>
    </S.Container>
  );
};

export default SchedulePage;
