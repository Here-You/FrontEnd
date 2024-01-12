import * as S from './MyPage.style';
import Category from '@/components/mypage/Category';
import MyPageInfo from '@/components/mypage/MypageInfo';

const MyPage = () => {
  return (
    <S.MypageWrap>
      <MyPageInfo />
      <Category />
    </S.MypageWrap>
  );
};

export default MyPage;
