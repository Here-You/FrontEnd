import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import * as S from './SignatureInput.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postSignatureComment } from '@/apis/request/signature';
import { useGetMyProfile } from '@/hooks/profile/queries/useGetMyProfile';
import useAuth from '@/store/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignatureCommentInput = () => {
  const { isLogin } = useAuth();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const { signatureId } = useParams();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: postSignatureComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['signatureComments']);
    },
    onError: () => {
      console.error('규칙 나가기 실패:', error);
      toast.error(
        '시그니처 포스트 댓글 작성에 실패했습니다. 나중에 다시 시도해주세요.',
      );
    },
  });
  const {
    data: me,
    isPending: mePending,
    isError: meError,
  } = useGetMyProfile();

  const myProfile = me?.data?.data?.user?.profileImage;

  const placeholder = '댓글을 작성해주세요';

  return (
    <S.Container>
      {isLogin ? (
        <>
          <S.Avatar src={myProfile || Logo} />
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
                } catch (error) {
                  console.error('댓글 작성 실패:', error);
                }
              }}>
              저장
            </S.SubmitButton>
          </S.ContentContainer>
        </>
      ) : (
        <div onClick={() => navigate('/login')}>로그인을 해주세요</div>
      )}
    </S.Container>
  );
};

export default SignatureCommentInput;
