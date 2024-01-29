import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import SearchMap from '../searchMap/SearchMap';
import * as S from './Schedules.style';
import DetailPlan from './detail/DetailPlan';
import EditLight from '/icons/EditLight.svg';
import File from '/icons/File.svg';
import LocationLight from '/icons/LocationLight.svg';
import Trash from '/icons/Trash.svg';

const Schedules = ({ data, dataLength }) => {
  const {
    scheduleId,
    title: scheduleTitle,
    date,
    detailSchedules,
    location: locationData,
    diary_written,
  } = data;
  const [isToggle, setIsToggle] = useState(false);
  const [locationInfo, setLocationInfo] = useState({});
  const lastPlan = scheduleId === dataLength ? true : false;

  const handleOnToggle = () => {
    setIsToggle(!isToggle);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: scheduleTitle,
      location: locationData,
    },
  });

  const { title, location } = watch();

  useEffect(() => {
    setValue('location', locationInfo);
  }, [locationInfo]);

  const deleteSchedule = async () => {
    alert('일정이 삭제되었습니다.');
    // 일정 삭제 api 요청
  };

  const onSubmit = async data => {
    alert('일정이 저장되었습니다.');
    console.log('제출된 데이터: ', data);
    // 일정 수정 api 요청
  };

  return (
    <S.Container>
      <S.MainContainer onClick={handleOnToggle}>
        <S.RowContainer>
          <S.Title
            id="title"
            {...register('title')}
            placeholder="일정 제목을 입력하세요."
            value={title || ''}
          />
          <S.LeftContainer>
            <S.Date>{date}</S.Date>
            <S.Image src={Trash} onClick={deleteSchedule} />
            <S.SaveButton onClick={handleSubmit(onSubmit)}>저장</S.SaveButton>
          </S.LeftContainer>
        </S.RowContainer>
        <S.RowContainer>
          <S.Mate>
            <S.Image src={LocationLight} />
            <SearchMap
              inputValue={locationData.name}
              register={register}
              selectLocation={setLocationInfo}
            />
          </S.Mate>
          <Link
            to={
              diary_written
                ? `/dailyrecord/${scheduleId}`
                : `/dailyrecord/${scheduleId}/write`
            }
            style={{
              marginLeft: 'auto',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
            <S.LeftContainer $diaryWritten={diary_written}>
              {diary_written ? '일지 확인' : '일지 작성'}
              <S.Image src={diary_written ? File : EditLight} />
            </S.LeftContainer>
          </Link>
        </S.RowContainer>
      </S.MainContainer>

      {dataLength > 1 && dataLength !== scheduleId && (
        <S.ShortLine $isToggle={isToggle} />
      )}

      <DetailPlan
        isToggle={isToggle}
        detailData={detailSchedules}
        dataLength={dataLength}
        lastPlan={lastPlan}
        scheduleId={scheduleId}
      />
    </S.Container>
  );
};

export default Schedules;
