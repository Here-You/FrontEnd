import { useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './DailyRecordWritePage.style';
import AddRoundDuotone from '/icons/AddRoundDuotone.svg';

const DailyRecordWritePage = () => {
  const [selectedImg, setSelectedImg] = useState();
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
      feeling: '',
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

  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log(file);

    // 추가: 파일이 변경될 때 setValue를 사용하여 recordImg 값을 설정
    setSelectedImg(URL.createObjectURL(file));
    setValue('recordImg', file);
  };

  const onSubmit = async data => {
    console.log('제출된 데이터: ', data);
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>2024</S.YearText>
        <S.DateText>8, JAN</S.DateText>
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
          <S.WeatherText
            id="weather"
            placeholder="날씨"
            {...register('weather', { required: '날씨를 입력해주세요' })}
          />
          <S.FeelingText
            id="feeling"
            placeholder="오늘의 기분"
            {...register('feeling', { required: '기분을 알려주세요' })}
          />
        </S.WeatherContainer>
        <S.ContentText
          id="content"
          placeholder="내용"
          {...register('content', { required: '내용을 입력해주세요' })}
        />
      </S.RecordContainer>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        제출하기
      </button>
    </S.Container>
  );
};

export default DailyRecordWritePage;
