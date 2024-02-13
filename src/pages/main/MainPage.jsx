import * as S from './Mainpage.style';
import Box from '@/components/main/Box';
import HereyouBanner from '@/components/main/HereyouBanner';
import HotSignature from '@/components/main/HotSignature';
import LoginBanner from '@/components/main/LoginBanner';
import MapContainer from '@/components/main/MapContainer';

export default function MainPage() {
  return (
    <S.PageContainer>
      <LoginBanner />
      <MapContainer />
      <S.Container2>
        <Box title="시그니처" />
        <Box title="메이트" />
      </S.Container2>
      <HereyouBanner />
      <HotSignature />
    </S.PageContainer>
  );
}
