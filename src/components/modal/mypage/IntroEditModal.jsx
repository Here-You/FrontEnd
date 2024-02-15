import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Modal from '../Modal';
import * as S from './EditModal.style';
import { updateIntro } from '@/apis/request/profile';
import Schema from '@/components/schema/EditSchema';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const IntroEditModal = () => {
  const introEditModal = useIntroEditModal();
  const queryClient = useQueryClient();
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
    setValue('introduction', myProfile?.introduction);
    introEditModal.onClose();
  };

  const { mutateAsync: changeIntro } = useMutation({
    mutationFn: updateIntro,
    onSuccess: () => {
      queryClient.invalidateQueries(['myProfile']);
    },
    onError: () => {
      toast.error('프로필 수정을 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('프로필 수정 성공');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const onSubmit = async () => {
    if (!errors.introduction) {
      try {
        await changeIntro(introduction);
        introEditModal.onClose();
      } catch (e) {
        console.error(e);
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
