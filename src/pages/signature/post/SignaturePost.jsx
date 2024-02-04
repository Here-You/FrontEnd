import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './SignaturePost.style';
import { useGetDetail } from '@/hooks/signature/useGetDetail';
import { CiLocationOn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const SignaturePostPage = () => {
  const params = useParams();
  const { signatureId } = params;
  const navigate = useNavigate();

  const { data: detailSignatures, error, loading } = useGetDetail(signatureId);

  const author = detailSignatures.author;
  const header = detailSignatures.header;

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
              <S.ProfileContainer>
                <S.ProfileImg src={author.image} />
                <h3>{author.name}</h3>
                <date>{header.date}</date>
                <button>팔로우</button>
              </S.ProfileContainer>
              <S.TitleContainer>
                <h1>{header.title}</h1>
              </S.TitleContainer>
              <S.ButtonContainer>
                <button>
                  <FaHeart onClick={() => alert('좋아요')} />
                </button>
                <h3>{header.like_cnt}</h3>
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

                <S.FunctionButtonContainer>
                  <S.ModifyButton
                    onClick={() => navigate(`/signature/edit/${signatureId}`)}>
                    수정
                  </S.ModifyButton>
                  <S.DeleteButton onClick={() => {}}>삭제</S.DeleteButton>
                </S.FunctionButtonContainer>
              </S.TextContainer>
            </>
          </S.SignatureContainer>
        )}
    </>
  );
};

export default SignaturePostPage;
