import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './SignaturePost.style';
import { deleteMySignature } from '@/apis/request/signature';
import HeartButton from '@/components/HeartButton/HeartButton';
import { useGetDetail } from '@/hooks/signature/useGetDetail';
import { CiLocationOn } from 'react-icons/ci';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const SignaturePostPage = () => {
  const params = useParams();
  const { signatureId } = params;
  const navigate = useNavigate();

  const {
    data: detailSignatures,
    error,
    loading,
    like,
    count,
    setCount,
    setLike,
  } = useGetDetail(signatureId);

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
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleDeletePost = async () => {
    try {
      await deleteMySignature(signatureId);
      toast.success('포스트가 정상적으로 삭제되었습니다.');
      navigate('/signature');
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleFollow = async () => {
    try {
      toast.success('팔로잉 성공');
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (loading) {
    return <div>로딩 중 입니다..</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다...</div>;
  }

  return (
    <>
      {detailSignatures &&
        detailSignatures.pages &&
        detailSignatures.pages[step - 1] && (
          <S.SignatureContainer>
            <>
              <S.HeaderContainer>
                <S.ProfileContainer>
                  <S.ProfileImg src={author?.image} />
                  <S.ProfileDesc>
                    <h3>{author?.name}</h3>
                    <date>{header.date}</date>
                  </S.ProfileDesc>
                </S.ProfileContainer>
                <S.FollowButton onClick={handleFollow}>팔로우</S.FollowButton>
              </S.HeaderContainer>
              <S.TitleContainer>
                <h1>{header.title}</h1>
              </S.TitleContainer>
              <S.ButtonContainer>
                <HeartButton id={header._id} isLiked={like} />
                <h3>{count}</h3>
              </S.ButtonContainer>
              <S.ImageContainer>
                <S.Button onClick={handlePrevPage} disabled={step === 1}>
                  <GrFormPrevious />
                </S.Button>
                <S.Image src={detailSignatures.pages[step - 1].image} />
                <S.Button
                  onClick={handleNextPage}
                  disabled={step === totalPages}>
                  <GrFormNext />
                </S.Button>
              </S.ImageContainer>
              <S.TextContainer>
                <h3>
                  <CiLocationOn />
                  {detailSignatures.pages[step - 1].location}
                </h3>
                <p>{detailSignatures.pages[step - 1].content}</p>
              </S.TextContainer>
              <S.FunctionButtonContainer>
                <S.ModifyButton
                  onClick={() => navigate(`/signature/edit/${signatureId}`)}>
                  수정
                </S.ModifyButton>
                <S.DeleteButton onClick={handleDeletePost}>삭제</S.DeleteButton>
              </S.FunctionButtonContainer>
            </>
          </S.SignatureContainer>
        )}
    </>
  );
};

export default SignaturePostPage;
