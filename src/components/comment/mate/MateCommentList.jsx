import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
    <>
      {commentsList?.map(page =>
        page?.data?.data?.data.map(comment => (
          <MateCommentView key={comment.id} commentData={comment} />
        )),
      )}
    </>
  );
};

export default MateCommentList;

{
  /* */
}

{
  /* {commentsList?.pages?.length > 0 ? (
        <S.Container>
          {commentsList?.pages?.map(page =>
            page?.data?.data[0]?.comments.map(data => (
              <MateCommentView key={data.id} commentData={data} />
            )),
          )}
          <div ref={ref} style={{ height: 10 }}></div>
        </S.Container>
      ) : (
        <></>
      )}
    </> */
}
