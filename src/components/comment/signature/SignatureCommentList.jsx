import { useParams } from 'react-router-dom';

import * as S from './SignatureCommentList.style';
import SignatureComment from './commentView/SignatureComment';
import { useGetSignatureComments } from '@/hooks/signature/queries/useGetSignatureComments';

const SignatureCommentList = () => {
  const { signatureId } = useParams();

  const { data, isLoading, isPending } = useGetSignatureComments(
    signatureId,
    2,
  );

  const signatureComments = data?.pages;

  return (
    <S.Container>
      {signatureComments?.map(comments =>
        comments?.data?.data?.data?.map(comment => (
          <SignatureComment key={comment._id} data={comment} />
        )),
      )}
      {/* {Data.map(data => (
       
      ))} */}
      123
    </S.Container>
  );
};

export default SignatureCommentList;
