import EditModalPage from './EditModal';
import * as S from './MyProfileEdit.style';
import ModalPortal from '@/components/ModalPortal';
import MyProfileEditContainer from './MyProfileEditContainer';
import { EDIT_CONTENTS_LIST, EDIT_SECOND_CONTENTS_LIST } from '@/constants/editPage';

const MyProfileEdit = () => {
  
  return (
    <>
      <ModalPortal>
        <EditModalPage />
      </ModalPortal>
      <MyProfileEditContainer listName={EDIT_CONTENTS_LIST}/>
      <MyProfileEditContainer listName={EDIT_SECOND_CONTENTS_LIST}/>
   
    </>
  );
};
export default MyProfileEdit;
