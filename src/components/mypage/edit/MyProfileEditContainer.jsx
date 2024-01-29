import * as S from './MyProfileEditContainer.style';
import { EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';

import { useUpdateNickName } from '@/hooks/profile/useUpdateNicknameQuery';
import editModal from '@/store/editModal';
import { useQuery } from '@tanstack/react-query';

const MyProfileEditContainer = ({ listName }) => {
  const { onOpen } = editModal();
  const { data, isPending, isError } = useQuery({
    queryKey: ['nick'],
    queryFn: useUpdateNickName,
  });

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
                (() => onOpen(list.modal, list.modalNum))
              }>
              {listName !== EDIT_SECOND_CONTENTS_LIST ? (
                <p>{data}</p>
              ) : (
                <p>{list.title}</p>
              )}
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
