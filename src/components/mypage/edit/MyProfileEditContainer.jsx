import { useEffect } from 'react';

import * as S from './MyProfileEditContainer.style';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';
import useModalScrollPreVention from '@/store/modalScrollPrevention';
import useIntroModal from '@/store/useIntroModal';
import useNickNameModal from '@/store/useNickNameModal';
import useTravelModal from '@/store/useTravelModal copy';
import useWithdrawalModal from '@/store/useWithdrawalModal';

const MyProfileEditContainer = ({ listName }) => {
  const { introOnOpen } = useIntroModal();
  const { nickNameOnOpen } = useNickNameModal();
  const { WithdrawalOnOpen } = useWithdrawalModal();
  const { travelOnOpen } = useTravelModal();

  const { isOpen, onOpen } = useModalScrollPreVention();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleOpenModal = list => {
    onOpen();
    if (list.id === 0) {
      travelOnOpen();
    } else if (list.id === 1) {
      introOnOpen();
    } else {
      WithdrawalOnOpen();
    }
  };

  return (
    <>
      <S.EditContainer>
        {listName?.map(list => {
          return (
            <S.EditContentContainer
              key={list.id}
              id={list.id}
              onClick={() => {
                if (listName === EDIT_SECOND_CONTENTS_LIST) {
                  handleOpenModal(list);
                }
              }}>
              <p>{list.title}</p>
              <p>{list.content}</p>
              {listName === EDIT_SECOND_CONTENTS_LIST && (
                <S.ArrowImg src={list.img}></S.ArrowImg>
              )}
            </S.EditContentContainer>
          );
        })}
      </S.EditContainer>
    </>
  );
};

export default MyProfileEditContainer;
