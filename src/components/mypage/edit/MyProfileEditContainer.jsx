import * as S from './MyProfileEditContainer.style';
import IntroEditModal from '@/components/modal/mypage/IntroEditModal';
import NicknameEditModal from '@/components/modal/mypage/NicknameEditModal';
import WithDrawalModal from '@/components/modal/mypage/WithDrawalModal';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';
import useIntroEditModal from '@/hooks/modal/useIntroEditModal';
import useNicknameEditModal from '@/hooks/modal/useNickameEditModal';
import useWithdrawalModal from '@/hooks/modal/useWithdrawalModal';

const MyProfileEditContainer = ({ listName }) => {
  const nicknameEditModal = useNicknameEditModal();
  const introEditModal = useIntroEditModal();
  const withdrawalModal = useWithdrawalModal();
  const handleOpenModal = list => {
    if (list.id === 0) {
      nicknameEditModal.onOpen();
    } else if (list.id === 1) {
      introEditModal.onOpen();
    } else {
      withdrawalModal.onOpen();
    }
  };

  return (
    <>
      <S.EditContainer>
        <NicknameEditModal myNickname="여행의 이유" />
        <IntroEditModal myIntro="졸리당" />
        <WithDrawalModal />
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
