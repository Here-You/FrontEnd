import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ClipLoader } from 'react-spinners';

import * as S from './MateCommentList.style';
import MateCommentView from './commentView/MateCommentView';
import { useGetComments } from '@/hooks/mate/queries/useGetComments';

const MateCommentList = ({ ruleId }) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError } =
    useGetComments(ruleId);

  const commentsList = data?.pages;

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
      {commentsList?.map(page =>
        page?.data?.data?.data.map(comment => (
          <MateCommentView key={comment.id} commentData={comment} />
        )),
      )}
      <S.LoadingWrapper>
        {isFetching && <ClipLoader size={50} color={'#1B9C85'} />}
      </S.LoadingWrapper>
      <div ref={ref} style={{ height: 5 }} />
    </S.Container>
  );
};

export default MateCommentList;
