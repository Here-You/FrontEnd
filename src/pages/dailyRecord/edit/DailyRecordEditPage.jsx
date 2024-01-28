import { useEffect, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { DAILYRECORD_DATA } from '../data';
import * as S from './DailyRecordEdit.style';

const DailyRecordEditPage = () => {
  const navigate = useNavigate();
  const { recordid: recordId, scheduleid: scheduleId } = useParams();
  const [recordData, setRecordData] = useState();
  const [selectedImg, setSelectedImg] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const Date = useMemo(() => {
    if (!recordData?.date) {
      return null;
    }
    const dateObject = recordData?.date;
    const year = dateObject.getFullYear();
    const month = dateObject.toLocaleString('en-US', { month: 'short' });
    const day = dateObject.getDate();
    return { year, month, day };
  }, [recordData?.date]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(schema),
  });

  const { location, title, weather, feeling, content, recordImg } = watch();

  useEffect(() => {
    const fetchData = async () => {
      const data = DAILYRECORD_DATA[recordId - 1]; //데이터 요청 부분
      setRecordData(data);

      // 데이터를 가져온 후에 기본값 설정
      setValue('location', data?.location);
      setValue('title', data?.title);
      setValue('weather', data?.weather);
      setValue('feeling', data?.feeling);
      setValue('content', data?.content);
      setValue('recordImg', data?.recordImg);
    };
    fetchData();
  }, []);

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
    alert('수정되었습니다');
    navigate(`/dailyrecord/${scheduleId}?recordid=${recordId}`);
  };

  return (
    <S.Container>
      <S.DateContainer>
        <S.YearText>{Date?.year}</S.YearText>
        <S.DateText>
          {Date?.day}, {Date?.month}
          <S.UploadButton type="submit" onClick={handleSubmit(onSubmit)}>
            수정
          </S.UploadButton>
        </S.DateText>
      </S.DateContainer>
      <S.RecordContainer>
        <S.RecordImageContainer $selectedImg={selectedImg}>
          <label htmlFor="recordImg">
            <S.PreviewImage src={selectedImg ? selectedImg : recordImg} />
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
          value={location || ''}
          {...register('location', { required: '위치를 입력해주세요' })}
        />
        <S.TitleText
          id="title"
          placeholder="제목"
          value={title || ''}
          {...register('title', { required: '제목을 입력해주세요' })}
        />
        <S.WeatherContainer>
          <S.WeatherText
            id="weather"
            placeholder="날씨"
            value={weather || ''}
            {...register('weather', { required: '날씨를 입력해주세요' })}
          />
          <S.FeelingText
            id="feeling"
            placeholder="오늘의 기분"
            value={feeling || ''}
            {...register('feeling', { required: '기분을 알려주세요' })}
          />
        </S.WeatherContainer>
        <S.ContentText
          id="content"
          placeholder="내용"
          value={content || ''}
          {...register('content', { required: '내용을 입력해주세요' })}
        />
      </S.RecordContainer>
    </S.Container>
  );
};

export default DailyRecordEditPage;
