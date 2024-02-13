import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './SignatureInput.style';
import { postSignatureComment } from '@/apis/request/signature';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignatureCommentInput = () => {
  const [content, setContent] = useState('');

  const { signatureId } = useParams();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: postSignatureComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: () => {
      console.error('규칙 나가기 실패:', error);
      alert(
        '시그니처 포스트 댓글 작성에 실패했습니다. 나중에 다시 시도해주세요.',
      );
    },
  });
  const placeholder = '댓글을 작성해주세요';
  const imgUrl =
    'https://images.unsplash.com/photo-1707421940727-ebfb88cd6aa0?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <S.Container>
      <S.Avatar src={imgUrl} />
      <S.ContentContainer>
        <S.Input
          placeholder={placeholder}
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={1}
        />
        <S.SubmitButton
          onClick={async () => {
            try {
              await mutateAsync({ signatureId, content });
              setContent('');
            } catch (e) {
              console.error(e);
            }
          }}>
          저장
        </S.SubmitButton>
      </S.ContentContainer>
    </S.Container>
  );
};

export default SignatureCommentInput;
