import MyProfileContainer from './MyProfileContainer';
import MyProfileEditContainer from './MyProfileEditContainer';
import IntroEditModal from '@/components/modal/mypage/IntroEditModal';
import NicknameEditModal from '@/components/modal/mypage/NicknameEditModal';
import WithDrawalModal from '@/components/modal/mypage/WithDrawalModal';
import {
  EDIT_CONTENTS_LIST,
  EDIT_SECOND_CONTENTS_LIST,
} from '@/constants/editPage';

const MyProfileEdit = () => {
  return (
    <>
      <NicknameEditModal />
      <IntroEditModal />
      <WithDrawalModal />
      <MyProfileContainer />
      <MyProfileEditContainer />
    </>
  );
};
export default MyProfileEdit;
