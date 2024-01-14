import * as S from './MyPage.style';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';
import EditModalPage from '@/components/mypage/edit/EditModalPage';

const MyPage = () => {
  return (
    <S.MypageContainer>
      <EditModalPage/>
      <MyPageInfo />
      <Category />
    </S.MypageContainer>
  );
};

export default MyPage;
