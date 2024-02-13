import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './SignaturePost.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import { deleteMySignature, likeSignature } from '@/apis/request/signature';
import HeartButton from '@/components/HeartButton/HeartButton';
import SignatureCommentList from '@/components/comment/signature/SignatureCommentList';
import SignatureCommentInput from '@/components/comment/signature/commentInput/SignatureCommentInput';
import FollowButton from '@/components/mate/FollowButton';
import LikerFindModal from '@/components/modal/likerFindModal/LikerFindModal';
import useLikersModal from '@/hooks/modal/useLikersModal';
import { useGetSignaturePost } from '@/hooks/signature/queries/useGetSignaturePost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CiLocationOn } from 'react-icons/ci';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const SignaturePostPage = () => {
  const params = useParams();
  const { signatureId } = params;
  const navigate = useNavigate();
  const LikersModal = useLikersModal();
  const queryClient = useQueryClient();

  const { data, isPending, isError } = useGetSignaturePost(signatureId);

  const { mutateAsync } = useMutation({
    mutationFn: likeSignature,
    onSuccess: () => {
      queryClient.invalidateQueries(['likers']);
    },
    onError: error => {
      console.error('좋아요 실패', error);
    },
  });

  const detailSignatures = data?.data?.data;

  const author = detailSignatures?.author;
  const header = detailSignatures?.header;

  const [step, setStep] = useState(1);

  const totalPages = detailSignatures?.pages?.length || 0;

  const handleNextPage = () => {
    if (step < totalPages) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevPage = () => {
    console.log('첫 번째 페이지입니다.');
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const deleteSignature = async () => {
    try {
      await deleteMySignature(signatureId);
      toast.success('포스트가 정상적으로 삭제되었습니다.');
      navigate('/signature');
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleDeletePost = async e => {
    e.stopPropagation();
    try {
      const confirm = window.confirm('정말 이 시그니처를 삭제할까요?');
      confirm ? await deleteSignature() : null;
    } catch (e) {
      console.error(e);
    }
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error 발생...</div>;
  }

  return (
    <>
      {detailSignatures &&
        detailSignatures?.pages &&
        detailSignatures?.pages[step - 1] && (
          <S.SignatureContainer>
            <>
              <S.HeaderContainer>
                <LikerFindModal />
                <S.ProfileContainer
                  onClick={() => navigate(`/profile/${author?._id}`)}>
                  {author?.image ? (
                    <S.ProfileImg src={author?.image} />
                  ) : (
                    <S.ProfileImg src={Logo} />
                  )}
                  <S.ProfileDesc>
                    {author?.name === null ? (
                      <h3>탈퇴한 회원</h3>
                    ) : (
                      <h3>{author?.name}</h3>
                    )}
                    <date>{header?.date}</date>
                  </S.ProfileDesc>
                </S.ProfileContainer>
                {author?.is_followed !== null && (
                  <FollowButton
                    initialFollowState={author?.is_followed}
                    id={author?._id}
                  />
                )}
              </S.HeaderContainer>
              <S.TitleContainer>
                <h1>{header?.title}</h1>
              </S.TitleContainer>
              <S.ButtonContainer>
                {/* {header._id} */}
                <S.Container
                  onClick={async () => {
                    try {
                      mutateAsync(header._id);
                    } catch (e) {
                      console.log(e);
                    }
                  }}>
                  <S.OutLineHeart size={28} />
                  <S.FillHeart size={24} isLiked={header?.is_liked} />
                  <h3>{header?.like_cnt}</h3>
                </S.Container>
                <div onClick={() => LikersModal.onOpen()}>목록 확인하기</div>
              </S.ButtonContainer>
              <S.ImageContainer>
                <S.Button onClick={handlePrevPage} disabled={step === 1}>
                  <GrFormPrevious />
                </S.Button>
                <S.Image
                  src={detailSignatures?.pages[step - 1]?.image || Logo}
                />
                <S.Button
                  onClick={handleNextPage}
                  disabled={step === totalPages}>
                  <GrFormNext />
                </S.Button>
              </S.ImageContainer>
              <S.TextContainer>
                <h3>
                  <CiLocationOn />
                  {detailSignatures?.pages[step - 1]?.location}
                </h3>
                <p>{detailSignatures?.pages[step - 1]?.content}</p>
              </S.TextContainer>
              <S.PageCount>
                {step}/{totalPages}
              </S.PageCount>
              <S.FunctionButtonContainer>
                <S.ModifyButton
                  onClick={() => navigate(`/signature/edit/${signatureId}`)}>
                  수정
                </S.ModifyButton>
                <S.DeleteButton onClick={handleDeletePost}>삭제</S.DeleteButton>
              </S.FunctionButtonContainer>
            </>
            <S.CommentContainer>
              <SignatureCommentInput />
              <SignatureCommentList />
            </S.CommentContainer>
          </S.SignatureContainer>
        )}
    </>
  );
};

export default SignaturePostPage;
