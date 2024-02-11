import imageCompression from 'browser-image-compression';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import * as S from './DailyRecordEdit.style';
import { updateDiary } from '@/apis/request/home';
import IconSelectBox from '@/components/SelectBox/IconSelectBox/IconSelectBox';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useGetDiary } from '@/hooks/home/useGetDiary';

const DailyRecordEditPage = () => {
  const navigate = useNavigate();
  const { diaryId } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const scheduleId = params.get('scheduleId');
  const [selectedImg, setSelectedImg] = useState();
  const { data } = useGetDiary(scheduleId);
  const [lodaing, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const Date = useMemo(() => {
    const date = data?.date?.split('-');
    return { date };
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(schema),
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

  useEffect(() => {
    if (data) {
      setValue('place', data.place);
      setValue('title', data.title);
      setValue('weather', data.weather);
      setValue('mood', data.mood);
      setValue('content', data.content);
      setValue('fileName', data.imageUrl);
    }
  }, [data, setValue]);

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
          maxWidthOrHeight: 50,
          maxSizeMB: 0.5,
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

  const onSubmit = async data => {
    try {
      setLoading(true);
      const res = await updateDiary(diaryId, data);
      if (res) {
        console.log('제출된 데이터: ', data);
        alert('수정되었습니다');
        navigate(`/dailyrecord?scheduleId=${scheduleId}`);
      }
    } catch (e) {
      setError(e);
      console.log(e);
      alert('일지 수정 중에 에러가 발생했습니다. 다시 시도해주세요');
    } finally {
      setLoading(false);
    }
  };

  const handleIconClick = (iconName, type) => {
    if (type === 'weather') {
      setValue('weather', iconName);
    } else if (type === 'mood') {
      setValue('mood', iconName);
    }
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{Date.date && Date.date[0]}</S.YearText>
        <S.DateText>
          {Date.date && Date.date[1]}, {Date.date && Date.date[2]}
          <S.UploadButton type="submit" onClick={handleSubmit(onSubmit)}>
            수정
          </S.UploadButton>
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer $selectedImg={selectedImg}>
          <label htmlFor="fileName">
            <S.PreviewImage src={selectedImg ? selectedImg : fileName} />
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
          value={place}
          {...register('place', { required: '위치를 입력해주세요' })}
        />
        <S.TitleText
          id="title"
          placeholder="제목"
          value={title}
          {...register('title', { required: '제목을 입력해주세요' })}
        />

        <S.WeatherContainer>
          <IconSelectBox
            iconData={WEATHER_ICON_LIST}
            onClick={handleIconClick}
            type="weather"
            value={weather}
          />
          <IconSelectBox
            iconData={MOOD_ICON_LIST}
            onClick={handleIconClick}
            type="mood"
            value={mood}
          />
        </S.WeatherContainer>
        <S.ContentText
          id="content"
          placeholder="내용"
          value={content}
          {...register('content', { required: '내용을 입력해주세요' })}
        />
      </S.RecordContainer>
    </S.Container>
  );
};

export default DailyRecordEditPage;
