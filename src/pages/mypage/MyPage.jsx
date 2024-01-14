import * as S from './MyPage.style';
import ModalPortal from '@/components/ModalPortal';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';
import EditModalPage from '@/components/mypage/edit/EditModal';

const MyPage = () => {
  return (
    <S.MypageContainer>
      <ModalPortal>
        <EditModalPage />
      </ModalPortal>
      <MyPageInfo />
      <Category />
    </S.MypageContainer>
  );
};

export default MyPage;
