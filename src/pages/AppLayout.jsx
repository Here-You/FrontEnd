import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Footer, Navbar } from '../components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f2f2;
`;

const ContentContainer = styled.div`
  max-width: 768px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OutletContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

const AppLayout = () => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/onboarding';
  return (
    <AppContainer>
      <ContentContainer>
        {!hideNavAndFooter && <Navbar />}
        <OutletContainer>
          <Toaster />
          <Outlet />
        </OutletContainer>
        {!hideNavAndFooter && <Footer />}
      </ContentContainer>
    </AppContainer>
  );
};

export default AppLayout;
