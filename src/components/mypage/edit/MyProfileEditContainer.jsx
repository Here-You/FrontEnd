import { useEffect } from 'react';

import * as S from './MyProfileEditContainer.style';
import IntroEditModal from '@/components/modal/mypage/IntroEditModal';
import NicknameEditModal from '@/components/modal/mypage/NicknameEditModal';
import WithDrawalModal from '@/components/modal/mypage/WithDrawalModal';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';
import useWithdrawalModal from '@/hooks/modal/useWithdrawalModal';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';

const MyProfileEditContainer = ({ listName }) => {
  const nicknameEditModal = useNicknameEditModal();
  const introEditModal = useIntroEditModal();
  const withdrawalModal = useWithdrawalModal();
  const { data, isPending, isError } = useGetMyProfile();
  const myProfile = data?.data?.data?.user;

  const handleOpenModal = list => {
    if (list.id === 0) {
      nicknameEditModal.onOpen();
    } else if (list.id === 1) {
      introEditModal.onOpen();
    } else {
      withdrawalModal.onOpen();
    }
  };
  useEffect(() => {}, [myProfile]);
  return (
    <>
      <S.EditContainer>
        <NicknameEditModal />
        <IntroEditModal />
        <WithDrawalModal />
        {listName?.map(list => {
          return (
            <S.EditContentContainer
              key={list?.id}
              id={list?.id}
              onClick={() => {
                if (listName === EDIT_SECOND_CONTENTS_LIST) {
                  handleOpenModal(list);
                }
              }}>
              <p>{list?.title}</p>

              {listName === EDIT_SECOND_CONTENTS_LIST ? (
                <S.ArrowImg src={list?.img}></S.ArrowImg>
              ) : (
                <p>{data[list?.content]}</p>
              )}
            </S.EditContentContainer>
          );
        })}
      </S.EditContainer>
    </>
  );
};

export default MyProfileEditContainer;
