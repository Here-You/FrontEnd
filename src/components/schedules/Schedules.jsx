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
import { createSchedule } from '@/apis/request/home';

const Schedules = ({ data, dataLength }) => {
  const {
    scheduleId,
    title: scheduleTitle,
    date,
    detailSchedules,
    location: locationData,
    diary,
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

  console.log(data);

  const { title, location } = watch();

  useEffect(() => {
    setValue('location', locationInfo);
  }, [locationInfo]);

  const deleteSchedule = async () => {
    try {
      setLoading(true);
      const res = await deleteSchedule(scheduleId);
      if (res) {
        toast('일정이 초기화되었습니다.');
      }
    } catch (e) {
      setError(true);
      console.log(e);
      toast.error('일정 초기화 중 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async data => {
    try {
      setLoading(true);
      const res = await createSchedule(
        scheduleId,
        title,
        location.latitude,
        location.longitude,
      );
      if (res) {
        console.log('제출된 데이터: ', data);
        alert('일정이 저장되었습니다.');
      }
    } catch (e) {
      setError(true);
      console.log(e);
      toast.error('일정 작성 중 에러가 발생했습니다.');
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
            <S.Image src={Trash} onClick={deleteSchedule} />
            <S.SaveButton onClick={handleSubmit(onSubmit)}>저장</S.SaveButton>
          </S.LeftContainer>
        </S.RowContainer>
        <S.RowContainer>
          <S.Mate>
            <S.Image src={LocationLight} />
            <SearchMap
              inputValue={locationData[0].latitude}
              register={register}
              selectLocation={setLocationInfo}
            />
          </S.Mate>
          <Link
            to={
              diary[0]
                ? `/dailyrecord/${scheduleId}?journeyId=${journeyId}`
                : `/dailyrecord/${scheduleId}/write`
            }
            style={{
              marginLeft: 'auto',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
            <S.LeftContainer $diaryWritten={diary[0]}>
              {diary[0] ? '일지 확인' : '일지 작성'}
              <S.Image src={diary[0] ? File : EditLight} />
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
