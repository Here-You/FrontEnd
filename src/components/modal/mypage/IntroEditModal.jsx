import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './IntroEditModal.style';
import { updateIntro } from '@/apis/request/profile';
import Schema from '@/components/schema/Schema';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import { yupResolver } from '@hookform/resolvers/yup';

const IntroEditModal = ({ myIntro }) => {
  const introEditModal = useIntroEditModal();
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
    resolver: yupResolver(Schema),
    mode: 'onChange',
    defaultValues: {
      introduction: myIntro,
    },
  });

  useEffect(() => {
    setValue('introduction', myIntro);
  }, [myIntro]);

  const { introduction } = watch();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>변경할 프로필 소개 내용을 입력해 주세요.</S.Title>
        <S.Input
          id="introduction"
          value={introduction}
          {...register('introduction')}
          placeholder="변경할 프로필 소개 내용을 입력하세요"
        />
        <S.ErrorMessage>{errors.introduction?.message}</S.ErrorMessage>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    introEditModal.onClose();
  };

  const onSubmit = async data => {
    if (!introduction) {
      alert('내용을 입력해주세요!');
    } else {
      setIsLoading(true);
      try {
        const res = await updateIntro({ ...data, introduction });
        if (res) {
          alert('프로필 소개가 변경 되었습니다.');
          console.log('제출된 데이터: ', data);
        }
      } catch (error) {
        console.log(error);
        console.error('서버 내부 오류.', error);
        alert('서버 내부 오류');
      } finally {
        setIsLoading(false);
        handleCloseModal();
      }
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={introEditModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="변경"
      secondButtonColor="red"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default IntroEditModal;
