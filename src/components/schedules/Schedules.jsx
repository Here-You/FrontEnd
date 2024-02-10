import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import SearchMap from '../searchMap/SearchMap';
import * as S from './Schedules.style';
import DetailPlan from './detail/DetailPlan';
import EditLight from '/icons/EditLight.svg';
import File from '/icons/File.svg';
import LocationLight from '/icons/LocationLight.svg';
import Trash from '/icons/Trash.svg';
import { createSchedule, deleteSchedule } from '@/apis/request/home';

const Schedules = ({ data, dataLength }) => {
  const {
    journeyId,
    scheduleId,
    title: scheduleTitle,
    date,
    detailSchedules,
    location: locationData,
    diary_written,
  } = data;
  const [isToggle, setIsToggle] = useState(false);
  const [locationInfo, setLocationInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

  const handleDeleteSchedule = async () => {
    try {
      setLoading(true);
      const res = await deleteSchedule(scheduleId);
      if (res) toast('일정이 삭제되었습니다.');
    } catch (e) {
      setError(true);
      console.log(e);
      toast.error('일정 삭제 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async data => {
    const { title, location } = data;
    try {
      setLoading(true);
      const res = await createSchedule({
        scheduleId: scheduleId,
        title: title,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      if (res) toast('일정이 저장되었습니다.');
    } catch (e) {
      setError(true);
      console.log(e);
      toast.error('일정 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
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
            <S.Image src={Trash} onClick={handleDeleteSchedule} />
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
                ? `/dailyrecord?scheduleId=${scheduleId}`
                : `/dailyrecord/${scheduleId}/write?date=${date}`
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
