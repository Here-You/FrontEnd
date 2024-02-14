import MyProfileContainer from './MyProfileContainer';
import MyProfileEditContainer from './MyProfileEditContainer';
import IntroEditModal from '@/components/modal/mypage/IntroEditModal';
import NicknameEditModal from '@/components/modal/mypage/NicknameEditModal';
import WithDrawalModal from '@/components/modal/mypage/WithDrawalModal';

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
