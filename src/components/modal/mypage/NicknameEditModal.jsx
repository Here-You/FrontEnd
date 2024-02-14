import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import * as S from './EditModal.style';
import { updateNickName } from '@/apis/request/profile';
import Schema from '@/components/schema/EditSchema';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import { yupResolver } from '@hookform/resolvers/yup';

const NicknameEditModal = () => {
  const nicknameEditModal = useNicknameEditModal();
  const [isLoading, setIsLoading] = useState(false);
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

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
    nicknameEditModal.onClose();
  };

  const onSubmit = async myProfile => {
    if (!nickname) {
      alert('내용을 입력해주세요!');
    } else {
      console.log(nickname);
      setIsLoading(true);
      try {
        const res = await updateNickName(nickname);
        if (res) {
          alert('닉네임이 변경 되었습니다.');
          console.log('제출된 데이터: ', myProfile);
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
      isOpen={nicknameEditModal.isOpen}
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

export default NicknameEditModal;
