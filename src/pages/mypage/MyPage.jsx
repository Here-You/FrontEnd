import * as S from './MyPage.style';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';
import EditModalPage from '@/components/mypage/edit/EditModalPage';

const MyPage = () => {
  return (
    <S.MypageWrap>
      <EditModalPage/>
      <MyPageInfo />
      <Category />
    </S.MypageWrap>
  );
};

export default MyPage;
