import styled from 'styled-components';

import Box from '@/components/main/Box';
import HereyouBanner from '@/components/main/HereyouBanner';
import HotSignature from '@/components/main/HotSignature';
import LoginBanner from '@/components/main/LoginBanner';
import MapContainer from '@/components/main/MapContainer';

export default function MainPage() {
  return (
    <PageContainer>
      <LoginBanner />
      <MapContainer />
      <Container2>
        <Box title="시그니처" />
        <Box title="메이트" />
      </Container2>
      <HereyouBanner />
      <HotSignature />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: 25%;
  justify-content: space-between;
  margin-bottom: 20px;
`;
