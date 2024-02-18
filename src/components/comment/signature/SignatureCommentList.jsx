import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import * as S from './SignatureCommentList.style';
import SignatureComment from './commentView/SignatureComment';
import { useGetSignatureComments } from '@/hooks/signature/queries/useGetSignatureComments';

const SignatureCommentList = () => {
  const { signatureId } = useParams();

  const { data, isFetching, hasNextPage, fetchNextPage } =
    useGetSignatureComments(signatureId, 3);

  const signatureComments = data?.pages;

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <S.Container>
      {signatureComments?.map(comments =>
        comments?.data?.data?.data?.map(comment => (
          <SignatureComment key={comment._id} data={comment} />
        )),
      )}
      <S.LoadingWrapper>
        {isFetching && <ClipLoader size={50} color={'#1B9C85'} />}
      </S.LoadingWrapper>
      <div ref={ref} style={{ height: 5 }} />
    </S.Container>
  );
};

export default SignatureCommentList;
