import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './MateCommentInput.style';
import { postMateRuleComment } from '@/apis/request/mate';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MateCommentInput = ({ ruleId }) => {
  const [content, setContent] = useState('');
  const textarea = useRef();
  const queryClient = useQueryClient();

  const { mutateAsync: postComment } = useMutation({
    mutationFn: postMateRuleComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
      setContent('');
    },
    onError: () => {
      toast.error('댓글 작성을 실패하였습니다. 다음에 다시 실행해주세요.');
    },
    onSettled: isSuccess => {
      if (isSuccess.data.success === true) {
        toast.success('댓글 작성 완료');
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const {
    data: me,
    isPending: mePending,
    isError: meError,
  } = useGetMyProfile();

  const myProfile = me?.data?.data?.user?.profileImage;

  return (
    <S.Container>
      <S.Avatar src={myProfile} />
      <S.CommentInput
        id="content"
        rows={1}
        placeholder="댓글을 작성해보세요~"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <S.SubmitButton
        onClick={async () => {
          try {
            if (!content.trim()) return;
            await postComment({ ruleId, content });
          } catch (e) {
            console.error(e);
          }
        }}>
        저장
      </S.SubmitButton>
    </S.Container>
  );
};

export default MateCommentInput;
