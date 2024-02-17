import * as S from './DailyRecordListSkeleton.style';

const DailyRecordListSkeleton = () => {
  return (
    <S.Container>
      <S.DateText />
      <S.MainRecordContainer>
        <S.RecordContentsContainer>
          <S.PreviewImage />
          <S.LocationText />
          <S.TitleText />
          <S.WeatherContainer />
          <S.ContentText />
        </S.RecordContentsContainer>
      </S.MainRecordContainer>
    </S.Container>
  );
};

export default DailyRecordListSkeleton;
