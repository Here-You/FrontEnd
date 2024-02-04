import { useParams } from 'react-router-dom';

const SignatureEditPage = () => {
  const params = useParams();
  const { signatureId } = params;
  return <div>{signatureId}번 페이지 수정</div>;
};

export default SignatureEditPage;
