import * as S from './MyProfileEditContainer.style';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';
import useIntroModal from '@/store/useIntroModal';
import useNickNameModal from '@/store/useNickNameModal';
import useWithdrawalModal from '@/store/useWithdrawalModal';

const MyProfileEditContainer = ({ listName }) => {
  const { introOnOpen } = useIntroModal();
  const { nickNameOnOpen } = useNickNameModal();
  const { WithdrawalOnOpen } = useWithdrawalModal();

  // const { data, error, message } = useUpdateNickName();

  return (
    <>
      <S.EditContainer>
        {listName?.map(list => {
          return (
            <S.EditContentContainer
              key={list.id}
              id={list.id}
              onClick={() => {
                if (list.id === 0) {
                  nickNameOnOpen();
                } else if (list.id === 1) {
                  introOnOpen();
                } else {
                  WithdrawalOnOpen();
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
