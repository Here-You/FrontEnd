import * as S from './DailyRecordEditSkeleton.style';

const DailyRecordEditSkeleton = () => {
  return (
    <S.Container>
      <S.DateContainer>
        <S.Text />
        <S.Text>
          <S.UploadButton />
        </S.Text>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer>
          <S.PreviewImage />
        </S.RecordImageContainer>
        <S.LocationText />
        <S.TitleText />

        <S.WeatherContainer></S.WeatherContainer>
        <S.ContentText />
      </S.RecordContainer>
    </S.Container>
  );
};

export default DailyRecordEditSkeleton;
