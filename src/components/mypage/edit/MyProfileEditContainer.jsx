import * as S from './MyProfileEditContainer.style';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';
import editModal from '@/store/editModal';
import inputModal from '@/store/inputModal';

const MyProfileEditContainer = ({ listName }) => {
  const { onOpens } = editModal();
  const { onOpen } = inputModal();

  // const { data, error, message } = useUpdateNickName();

  return (
    <>
      <S.EditContainer>
        {listName?.map(list => {
          return (
            <S.EditContentContainer
              key={list.id}
              id={list.id}
              onClick={
                listName === EDIT_SECOND_CONTENTS_LIST &&
                (list.id === 2
                  ? () =>
                      onOpens(
                        '여행의 이유 회원탈퇴',
                        '회원탈퇴',
                        '정말 탈퇴하시겟어요? ㅠㅠ',
                      )
                  : () =>
                      onOpen(
                        list.modalTitle,
                        list.button_text,
                        list.input_type,
                      ))
              }>
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
