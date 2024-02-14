import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './EditModal.style';
import { updateIntro } from '@/apis/request/profile';
import Schema from '@/components/schema/EditSchema';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import { yupResolver } from '@hookform/resolvers/yup';

const IntroEditModal = () => {
  const introEditModal = useIntroEditModal();
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

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
      introduction: myProfile?.introduction,
    },
  });

  useEffect(() => {
    setValue('introduction', myProfile?.introduction);
  }, [myProfile?.introduction]);

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
    window.location.reload();
  };

  const onSubmit = async myProfile => {
    if (!introduction) {
      alert('내용을 입력해주세요!');
    } else {
      try {
        const res = await updateIntro(introduction);
        if (res) {
          alert('프로필 소개가 변경 되었습니다.');
          console.log('제출된 데이터: ', myProfile);
        }
      } catch (error) {
        console.log(error);
        console.error('서버 내부 오류.', error);
        alert('서버 내부 오류');
      } finally {
        handleCloseModal();
      }
    }
  };

  return (
    <Modal
      disabled={isPending}
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
