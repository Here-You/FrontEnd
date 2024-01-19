import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SignaturePage from './SignaturePage';
import TokenErrorPage from './TokenErrorPage';
import TotalSignature from './main/TotalSignature';
import { getAuthToken } from '@/utils/auth';

const Signature = () => {
  const location = useLocation();
  //뒤에 쿼리 파라미터 있으면 추출
  const hasTitle = new URLSearchParams(location.search).has('title');
  // 이렇게 관리하는 것으 임시 방책.
  // 전역으로 관리하거나, 매번 페이지 렌더링 시, 백엔드에 토큰 유효성 요청을 하는 방안으로 변경.
  // 향후 protected Route 도입 예정. BE에서 세션형식인지 JWT형식인지 혼용인지 아직 몰라서유...
  const token = getAuthToken();
  /*  const isAuthenticated = token ? true : false; */ //이게 원래꺼
  const isAuthenticated = token ? false : true; //SignaturePage보려면 이거로
  if (!isAuthenticated) {
    return <TokenErrorPage />;
  }
  return <div>{hasTitle ? <TotalSignature /> : <SignaturePage />}</div>;
};

export default Signature;
