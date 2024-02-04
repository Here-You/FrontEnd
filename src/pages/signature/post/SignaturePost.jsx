import { useParams } from 'react-router-dom';

import { useGetDetail } from '@/hooks/signature/useGetDetail';

const SignaturePostPage = () => {
  const params = useParams();
  const { signatureId } = params;

  const { data, error, loading } = useGetDetail(signatureId);

  if (loading) {
    return <div>로딩 중 입니다..</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다...</div>;
  }

  console.log(data);

  return (
    <>{data && data.map(list => <div key={list.page}>{list.content}</div>)}</>
  );
};

export default SignaturePostPage;
