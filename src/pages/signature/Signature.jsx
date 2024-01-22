import { useEffect } from 'react';

import TokenErrorPage from './TokenErrorPage';
import { getAuthToken } from '@/utils/auth';

const Signature = () => {
  // 이렇게 관리하는 것으 임시 방책.
  // 전역으로 관리하거나, 매번 페이지 렌더링 시, 백엔드에 토큰 유효성 요청을 하는 방안으로 변경.
  // 향후 protected Route 도입 예정. BE에서 세션형식인지 JWT형식인지 혼용인지 아직 몰라서유...
  const token = getAuthToken();
  const isAuthenticated = token ? true : false;

  if (!isAuthenticated) {
    return <TokenErrorPage />;
  }

  return <div></div>;
};

export default Signature;

