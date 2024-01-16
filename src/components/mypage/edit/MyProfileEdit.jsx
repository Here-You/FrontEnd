import EditModalPage from './EditModal';
import MyProfileEditContainer from './MyProfileEditContainer';
import ModalPortal from '@/components/ModalPortal';
import {
  EDIT_CONTENTS_LIST,
  EDIT_SECOND_CONTENTS_LIST,
} from '@/constants/editPage';

const MyProfileEdit = () => {
  return (
    <>
      <MyProfileEditContainer listName={EDIT_CONTENTS_LIST} />
      <MyProfileEditContainer listName={EDIT_SECOND_CONTENTS_LIST} />
    </>
  );
};
export default MyProfileEdit;
