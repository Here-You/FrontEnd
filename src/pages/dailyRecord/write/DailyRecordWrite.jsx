import imageCompression from 'browser-image-compression';
import { useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import * as S from './DailyRecordWritePage.style';
import AddRoundDuotone from '/icons/AddRoundDuotone.svg';
import { postDiary } from '@/apis/request/home';
import IconSelectBox from '@/components/SelectBox/IconSelectBox/IconSelectBox';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';

const DailyRecordWritePage = () => {
  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const date = params.get('date');
  const [selectedImg, setSelectedImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const Date = useMemo(() => {
    if (date) {
      const recordDate = date?.split('-');
      return { recordDate };
    }
  }, [date]);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      place: '',
      title: '',
      weather: '',
      mood: '',
      content: '',
      fileName: '',
    },
  });
  const { place, title, weather, mood, content, fileName } = watch();

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = textRef.current.scrollHeight + 10 + 'px';
    }
  }, []);

  const handleFileChange = async event => {
    const file = event.target.files[0];
    setSelectedImg(URL.createObjectURL(file));

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressedFile = await imageCompression(file, {
          maxWidthOrHeight: 500,
          maxSizeMB: 2,
          fileType: 'image/jpeg',
        });
        const compressedReader = new FileReader();
        compressedReader.onloadend = () => {
          const base64Image = compressedReader.result.split(',')[1];
          setValue('fileName', base64Image);
        };
        compressedReader.readAsDataURL(compressedFile);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('이미지 압축 실패:', error);
    }
  };

  const handleIconClick = (iconName, type) => {
    if (type === 'weather') {
      setValue('weather', iconName);
    } else if (type === 'mood') {
      setValue('mood', iconName);
    }
  };

  const onSubmit = async data => {
    try {
      setIsLoading(true);
      const res = await postDiary({ scheduleId: scheduleId, postData: data });
      if (res) {
        console.log('제출된 데이터: ', data);
        toast.success('하루 일지가 작성되었습니다.');
        navigate(`/dailyrecord?scheduleId=${scheduleId}`);
      }
    } catch (e) {
      setIsError(true);
      console.log(e);
      toast.error('작성 중 에러가 발생했습니다. 나중에 다시 시도해주세요');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{Date?.recordDate && Date.recordDate[0]}</S.YearText>
        <S.DateText>
          {Date?.recordDate && Date.recordDate[1]},{' '}
          {Date?.recordDate && Date.recordDate[2]}
          <S.UploadButton
            type="submit"
            disabled={
              !content || !fileName || !mood || !place || !title || !weather
            }
            $errors={
              !content || !fileName || !mood || !place || !title || !weather
            }
            onClick={handleSubmit(onSubmit)}>
            저장
          </S.UploadButton>
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer $selectedImg={selectedImg}>
          {selectedImg && (
            <label htmlFor="fileName">
              <S.PreviewImage src={selectedImg} />
            </label>
          )}
          <label htmlFor="fileName">
            <S.ImageUploadButton src={AddRoundDuotone} />
          </label>
          <S.ImageInput
            id="fileName"
            type="file"
            accept="image/jpeg, image/webp, image/svg, image/png"
            onChange={handleFileChange}
          />
        </S.RecordImageContainer>
        <S.LocationText
          id="place"
          placeholder="오늘의 위치"
          ref={textRef}
          onInput={handleResizeHeight}
          {...register('place', { required: '위치를 입력해주세요' })}
        />
        <S.TitleText
          id="title"
          placeholder="제목"
          {...register('title', { required: '제목을 입력해주세요' })}
        />
        <S.WeatherContainer>
          <IconSelectBox
            iconData={WEATHER_ICON_LIST}
            onClick={handleIconClick}
            type="weather"
          />
          <IconSelectBox
            iconData={MOOD_ICON_LIST}
            onClick={handleIconClick}
            type="mood"
          />
        </S.WeatherContainer>
        <S.ContentText
          id="content"
          placeholder="내용"
          {...register('content', { required: '내용을 입력해주세요' })}
        />
      </S.RecordContainer>
    </S.Container>
  );
};

export default DailyRecordWritePage;
