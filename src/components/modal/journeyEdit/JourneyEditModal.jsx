import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Modal from '../Modal';
import * as S from './JourneyEdit.style';
import { deleteJourney, updateJourney } from '@/apis/request/home';
import useJourneyEditModal from '@/hooks/modal/useJourneyEditModal';

const JourneyEditModal = ({ journeyId, journeyTitle, startDate, endDate }) => {
  const journeyEditModal = useJourneyEditModal();
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
      title: journeyTitle,
      startDate: startDate,
      endDate: endDate,
    },
  });

  useEffect(() => {
    setValue('title', journeyTitle);
    setValue('startDate', startDate);
    setValue('endDate', endDate);
  }, [journeyTitle, startDate, endDate]);

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

  const onSubmit = async data => {
    if (!title) {
      toast('내용을 입력해주세요!');
    } else {
      setIsLoading(true);
      try {
        const res = await updateJourney({ ...data, journeyId: journeyId });
        if (res) {
          toast.success('여정이 수정되었습니다.');
          console.log('제출된 데이터: ', data);
          window.location.reload();
        }
      } catch (error) {
        setIsError(true);
        toast.error('여정 저장 중에 오류가 발생했습니다. 다시 시도해주세요');
      } finally {
        journeyEditModal.onClose();
        setIsLoading(false);
      }
    }
  };

  const handleDeleteJourney = async () => {
    try {
      const res = await deleteJourney(journeyId);
      if (res) toast.success('여정이 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      setIsError(true);
      toast.error('여정 삭제 중에 오류가 발생했습니다. 다시 시도해주세요');
    } finally {
      reset({});
      journeyEditModal.onClose();
      setIsLoading(false);
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={journeyEditModal.isOpen}
      onClose={() => {
        journeyEditModal.onClose();
      }}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="여정 저장하기"
      body={BodyContent}
      secondaryAction={handleDeleteJourney}
      secondaryActionLabel="여정 삭제하기"
    />
  );
};

export default JourneyEditModal;
