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

  const { mutateAsync: changeNickName, isError: nickError } = useMutation({
    mutationFn: updateNickName,
    onSuccess: () => {
      queryClient.invalidateQueries(['myProfile']);
    },
    onError: error => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === 'CONFLICT'
      ) {
        toast.error('중복된 닉네임이 존재합니다.');
      } else {
        // Handle other errors
        toast.error('에러가 발생했습니다.');
      }
      console.error('닉네임 변경 실패', error);
    },
  });

  useEffect(() => {
    setValue('nickname', myProfile?.nickname);
  }, [myProfile?.nickname]);

  const { nickname } = watch();

  console.log(nickError && mutation.error.message);

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
    nicknameEditModal.onClose();
  };

  const handleUpdateNickname = async () => {
    try {
      await changeNickName(nickname);
      nicknameEditModal.onClose();
    } catch (e) {
      console.error(e);
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
