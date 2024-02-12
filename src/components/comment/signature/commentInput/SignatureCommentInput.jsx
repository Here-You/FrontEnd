import { useRef } from 'react';

import * as S from './SignatureInput.style';

const SignatureCommentInput = () => {
  const textarea = useRef();
  const placeholder = '댓글을 작성해주세요';

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };
  const imgUrl =
    'https://images.unsplash.com/photo-1707421940727-ebfb88cd6aa0?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <S.Container>
      <S.Avatar src={imgUrl} />
      <S.ContentContainer>
        <S.Input
          placeholder={placeholder}
          onChange={handleResizeHeight}
          ref={textarea}
          rows={1}></S.Input>
        <S.SubmitButton>저장</S.SubmitButton>
      </S.ContentContainer>
    </S.Container>
  );
};

export default SignatureCommentInput;
