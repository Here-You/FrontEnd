import { useRef, useState } from 'react';

import * as S from './MateCommentInput.style';
import { postMateRuleComment } from '@/apis/request/mate';
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
    onError: error => {
      console.error('댓글 삭제 실패', error);
      alert('댓글이 삭제되지 않았습니다.');
    },
  });

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const imgUrl =
    'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8';

  return (
    <S.Container>
      <S.Avatar src={imgUrl} />
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
