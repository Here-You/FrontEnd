import * as S from './CalendarSkeleton.style';
import SchedulesViewSkeleton from '@/components/schedules/skeleton/SchedulesViewSkeleton';

const CalendarSkeleton = () => {
  return (
    <S.Wrapper>
      <S.ButtonContainer>
        <S.Button />
        <S.Button />
      </S.ButtonContainer>
      <S.HeaderWrapper>
        <S.Circle />
        <S.CircleWrapper />
      </S.HeaderWrapper>
      <S.HomeContentContainer></S.HomeContentContainer>

      {new Array(3).fill(0).map(item => (
        <SchedulesViewSkeleton />
      ))}
    </S.Wrapper>
  );
};

export default CalendarSkeleton;
