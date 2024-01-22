import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SignaturePage from './SignaturePage';
import TokenErrorPage from './TokenErrorPage';
import NoSignature from './main/NoSignature';
import TotalSignature from './main/TotalSignature';
import { getSignaturePreview } from '@/apis/request/preview';
import { getAuthToken } from '@/utils/auth';

const Signature = () => {
  const location = useLocation();
  //뒤에 쿼리 파라미터 있으면 추출
  const hasTitle = new URLSearchParams(location.search).has('title');
  // 이렇게 관리하는 것으 임시 방책.
  // 전역으로 관리하거나, 매번 페이지 렌더링 시, 백엔드에 토큰 유효성 요청을 하는 방안으로 변경.
  // 향후 protected Route 도입 예정. BE에서 세션형식인지 JWT형식인지 혼용인지 아직 몰라서유...
  const token = getAuthToken();
  /*  const isAuthenticated = token ? true : false; */ //이게 원래꺼!!
  const isAuthenticated = token ? false : true; //SignaturePage보려면 이거로

  //내가 작성한 시그니처가 없을 때 NoSignature 렌더링
  const [data, setData] = useState([]);

  /*   useEffect(() => {   NoSignature 보고 싶으면 밑에 코드 주석처리 하고 이걸로
    setData([]);
  });
 */

  const getData = async () => {
    try {
      const res = await getSignaturePreview();
      const mockData = res.data;
      setData(mockData);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isAuthenticated) {
    return <TokenErrorPage />;
  }
  if (data.length == 0) {
    return <NoSignature />;
  }

  return <div>{hasTitle ? <TotalSignature /> : <SignaturePage />}</div>;
};

export default Signature;
