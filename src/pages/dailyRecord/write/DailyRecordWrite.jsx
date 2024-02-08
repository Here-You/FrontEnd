import imageCompression from 'browser-image-compression';
import { useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './DailyRecordWritePage.style';
import AddRoundDuotone from '/icons/AddRoundDuotone.svg';
import { postDiary } from '@/apis/request/home';
import IconSelectBox from '@/components/SelectBox/IconSelectBox/IconSelectBox';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';

const DailyRecordWritePage = () => {
  const [selectedImg, setSelectedImg] = useState();
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('en-US', { month: 'short' });
  const day = new Date().getDate();
  const [weather, setWeather] = useState('');
  const [mood, setMood] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(schema),
    defaultValues: {
      location: '',
      title: '',
      weather: '',
      mood: '',
      content: '',
      recordImg: '',
    },
  });

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
          maxWidthOrHeight: 800,
          maxSizeMB: 2,
          fileType: 'image/jpeg',
        });

        const compressedReader = new FileReader();

        compressedReader.onloadend = () => {
          const base64Image = compressedReader.result.split(',')[1];
          setValue('recordImg', base64Image);
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
      setWeather(iconName);
      setValue('weather', iconName);
    } else if (type === 'mood') {
      setMood(iconName);
      setValue('mood', iconName);
    }
  };

  const onSubmit = async data => {
    console.log('제출된 데이터: ', data);
    if (!mood || !weather) {
      alert('오늘의 기분 및 날씨를 선택해주세요');
    } else {
      try {
        setIsLoading(true);
        const res = await postDiary({ scheduleId: 1, postData: data });
        if (res) {
          alert('하루 일지가 작성되었습니다.');
        }
      } catch (e) {
        console.log(e.message);
        alert('작성 중 에러가 발생했습니다. 나중에 다시 시도해주세요');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{year}</S.YearText>
        <S.DateText>
          {day}, {month}
          <S.UploadButton type="submit" onClick={handleSubmit(onSubmit)}>
            저장
          </S.UploadButton>
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer $selectedImg={selectedImg}>
          {selectedImg && (
            <label htmlFor="recordImg">
              <S.PreviewImage src={selectedImg} />
            </label>
          )}
          <label htmlFor="recordImg">
            <S.ImageUploadButton src={AddRoundDuotone} />
          </label>
          <S.ImageInput
            id="recordImg"
            type="file"
            accept="image/jpeg, image/webp, image/svg, image/png"
            onChange={handleFileChange}
          />
        </S.RecordImageContainer>
        <S.LocationText
          id="location"
          placeholder="오늘의 위치"
          ref={textRef}
          onInput={handleResizeHeight}
          {...register('location', { required: '위치를 입력해주세요' })}
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
