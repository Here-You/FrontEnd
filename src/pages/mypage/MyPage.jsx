import * as S from './MyPage.style';
import ModalPortal from '@/components/ModalPortal';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';
import LogOutModal from '@/components/mypage/modal/LogOutModal';
import ModalPage from '@/components/modal/Modal';

const MyPage = () => {
  return (
    <>
      <ModalPortal>
        <LogOutModal />
      </ModalPortal>
      <S.MypageContainer>
        <MyPageInfo />
        <Category />
      </S.MypageContainer>
    </>
  );
};

export default MyPage;
