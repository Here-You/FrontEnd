import * as S from './MyPage.style';
import ModalPortal from '@/components/ModalPortal';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';
import EditModalPage from '@/components/mypage/edit/EditModal';
import InputModalPage from '@/components/mypage/edit/InputModal';

const MyPage = () => {
  return (
    <>
      <ModalPortal>
        <EditModalPage />
        <InputModalPage />
      </ModalPortal>
      <S.MypageContainer>
        <MyPageInfo />
        <Category />
      </S.MypageContainer>
    </>
  );
};

export default MyPage;
