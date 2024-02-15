import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Modal from '../Modal';
import * as S from './EditModal.style';
import { updateNickName } from '@/apis/request/profile';
import Schema from '@/components/schema/EditSchema';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NicknameEditModal = () => {
  const nicknameEditModal = useNicknameEditModal();
  const [isLoading, setIsLoading] = useState(false);
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },

    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
    defaultValues: {
      nickname: myProfile?.nickname,
    },
  });

  const {
    mutateAsync: changeNickName,
    isError: nickError,
    error,
  } = useMutation({
    mutationFn: updateNickName,
    onSuccess: () => {
      queryClient.invalidateQueries(['myProfile']);
    },
    onError: () => {
      toast.error('닉네임 수정을 실패하였습니다.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('닉네임 수정 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  useEffect(() => {
    setValue('nickname', myProfile?.nickname);
  }, [myProfile?.nickname]);

  const { nickname } = watch();

  const BodyContent = (
    <S.Container>
      <S.ContentContainer>
        <S.Title>변경할 닉네임을 입력해 주세요.</S.Title>
        <S.Input
          id="nickname"
          value={nickname}
          {...register('nickname')}
          placeholder="변경할 닉네임을 입력하세요"
        />
        <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
      </S.ContentContainer>
    </S.Container>
  );

  const handleCloseModal = () => {
    setValue('nickname', myProfile?.nickname);
    nicknameEditModal.onClose();
  };

  const handleUpdateNickname = async () => {
    if (!errors.nickname) {
      try {
        await changeNickName(nickname);
        nicknameEditModal.onClose();
      } catch (e) {
        console.error(e);
      }
    } else {
      toast.error('조건에 맞춰주세요!');
    }
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={nicknameEditModal.isOpen}
      onClose={handleCloseModal}
      onSubmit={handleUpdateNickname}
      actionLabel="변경"
      secondButtonColor="red"
      body={BodyContent}
      secondaryAction={handleCloseModal}
      secondaryActionLabel="취소"
    />
  );
};

export default NicknameEditModal;
