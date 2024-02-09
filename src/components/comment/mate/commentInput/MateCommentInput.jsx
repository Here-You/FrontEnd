import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import * as S from './MateCommentInput.style';
import { postMateruleComment } from '@/apis/request/mate';

const MateCommentInput = ({ ruleId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };
  const imgUrl =
    'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8';

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      content: '',
    },
  });

  const { content } = watch();

  const onSubmit = async data => {
    if (!content.trim()) {
      toast('댓글을 먼저 작성해주세요!');
    } else {
      try {
        setLoading(true);
        const res = await postMateruleComment(ruleId, content);
        if (res) {
          toast('댓글 작성');
          reset();
        }
      } catch (e) {
        console.log(e);
        setError(true);
        toast('댓글 작성 중에 에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <S.Container>
      <S.Avatar src={imgUrl} />
      <S.CommentInput
        id="content"
        ref={textarea}
        rows={1}
        placeholder="댓글을 작성해보세요~"
        onChange={handleResizeHeight}
        {...register('content')}
      />
      <S.SubmitButton onClick={handleSubmit(onSubmit)}>저장</S.SubmitButton>
    </S.Container>
  );
};

export default MateCommentInput;
