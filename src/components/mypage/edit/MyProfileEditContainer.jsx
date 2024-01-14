import * as S from './MyProfileEditContainer.style';

import { EDIT_CONTENTS_LIST,EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';

const MyProfileEditContainer = ({ listName }) => {
  return (
    <>
      <S.EditContainer>
        {listName?.map(list => {
          return (
            <S.EditContentContainer
              key={list.id}
              style={{
                border: listName.id === '2' ? 'none' : '',
              }}>
              <p>{list.title}</p>
              <p>{list.content}</p>
              <img src={list.img}></img>
            </S.EditContentContainer>
          );
        })}
      </S.EditContainer>
    </>
  );
};
export default MyProfileEditContainer;
