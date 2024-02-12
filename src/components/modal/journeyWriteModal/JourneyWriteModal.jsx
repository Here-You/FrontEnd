import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './JourneyWriteModal.style';
import { saveJourney } from '@/apis/request/home';
import useJourneyWriteModal from '@/hooks/modal/useJourneyWriteModal';

const JourneyWriteModal = ({ startDate, endDate }) => {
  const journeyWriteModal = useJourneyWriteModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      startDate: startDate,
      endDate: endDate,
    },
  });

  const { title } = watch();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>여정 제목</S.Title>
        <S.Input
          id="title"
          {...register('title')}
          value={title}
          placeholder="여정 제목을 입력하세요"
        />
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>시작 날짜</S.Title>
        <S.Date>{startDate}</S.Date>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>끝 날짜</S.Title>
        <S.Date>{endDate}</S.Date>
      </S.ContentContainer>
    </S.Container>
  );

  useEffect(() => {
    setValue('startDate', startDate);
    setValue('endDate', endDate);
  }, [startDate, endDate]);

  const onSubmit = async data => {
    if (!title || !startDate || !endDate) {
      alert('내용을 입력해주세요!');
    } else {
      setIsLoading(true);
      try {
        const res = await saveJourney(data);
        if (res) {
          alert('여정이 저장되었습니다.');
          console.log('제출된 데이터: ', data);
          window.location.reload();
        }
      } catch (error) {
        setIsError(true);
        alert('여정 저장 중에 오류가 발생했습니다. 다시 시도해주세요');
      } finally {
        reset({});
        journeyWriteModal.onClose();
        setIsLoading(false);
      }
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={journeyWriteModal.isOpen}
      onClose={() => {
        journeyWriteModal.onClose();
        reset({});
      }}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="여정 생성하기"
      body={BodyContent}
    />
  );
};

export default JourneyWriteModal;
