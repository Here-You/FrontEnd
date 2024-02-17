import * as S from './Mainpage.style';
import Box from '@/components/main/Box';
import HereyouBanner from '@/components/main/HereyouBanner';
import HotSignature from '@/components/main/HotSignature';
import LoginBanner from '@/components/main/LoginBanner';
import MapContainer from '@/components/main/MapContainer';
import useAuth from '@/store/useAuth';

export default function MainPage() {
  const { isLogin } = useAuth();

  return (
    <S.Wrapper>
      <S.PageContainer>
        <LoginBanner isLogin={isLogin} />
        <MapContainer />
        <S.Container2>
          <div>야호!</div>
          <Box title="시그니처" />
          <Box title="메이트" />
        </S.Container2>
        <HereyouBanner />
        <HotSignature />
      </S.PageContainer>
    </S.Wrapper>
  );
}
