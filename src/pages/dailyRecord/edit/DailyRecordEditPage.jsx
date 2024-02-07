import { useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import * as S from './DailyRecordEdit.style';
import { updateDiary } from '@/apis/request/home';
import IconSelectBox from '@/components/SelectBox/IconSelectBox/IconSelectBox';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useQueryClient } from '@tanstack/react-query';

const DailyRecordEditPage = () => {
  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const [selectedImg, setSelectedImg] = useState();
  const cache = useQueryClient();
  const data = cache.getQueryData(['diaries', parseInt(scheduleId)]).data
    ?.data[0];
  const [diaryWeather, setDiaryWeather] = useState('');
  const [dairyMood, setdairyMood] = useState('');
  const [lodaing, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const Date = useMemo(() => {
    const date = data?.created.split('T')[0].split('-');
    return { date };
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(schema),
    defaultValues: {
      place: data.place,
      title: data.title,
      weather: data.weather,
      mood: data.mood,
      content: data.content,
      image: data.diary_image?.image_key,
    },
  });

  const { place, title, weather, mood, content, image } = watch();

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = textRef.current.scrollHeight + 10 + 'px';
    }
  }, []);

  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log(file);

    // 추가: 파일이 변경될 때 setValue를 사용하여 recordImg 값을 설정
    setSelectedImg(URL.createObjectURL(file));
    setValue('recordImg', file);
  };

  const onSubmit = async data => {
    try {
      setLoading(true);
      const res = await updateDiary({ id: data.id, postData: data });
      if (res) {
        console.log('제출된 데이터: ', data);
        alert('수정되었습니다');
        navigate(`/dailyrecord/${scheduleId}`);
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
      setDiaryWeather(iconName);
      setValue('weather', iconName);
    } else if (type === 'mood') {
      setdairyMood(iconName);
      setValue('mood', iconName);
    }
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{Date.date[0]}</S.YearText>
        <S.DateText>
          {Date.date[1]}, {Date.date[2]}
          <S.UploadButton type="submit" onClick={handleSubmit(onSubmit)}>
            수정
          </S.UploadButton>
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer $selectedImg={selectedImg}>
          <label htmlFor="image">
            <S.PreviewImage src={selectedImg ? selectedImg : image} />
          </label>
          <S.ImageInput
            id="image"
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
            value={data.weather}
          />
          <IconSelectBox
            iconData={MOOD_ICON_LIST}
            onClick={handleIconClick}
            type="mood"
            value={data.mood}
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
