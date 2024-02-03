import * as S from './MyPage.style';
import ModalPortal from '@/components/ModalPortal';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';

const MyPage = () => {
  return (
    <>
      <ModalPortal>

      </ModalPortal>
      <S.MypageContainer>
        <MyPageInfo />
        <Category />
      </S.MypageContainer>
    </>
  );
};

export default MyPage;
