import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
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

const TravelLayout = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === '/onboarding' ||
    location.pathname === '/traveltype' ||
    location.pathname === '/traveltype/result';
  return (
    <AppContainer>
      <ContentContainer>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </ContentContainer>
    </AppContainer>
  );
};

export default TravelLayout;
