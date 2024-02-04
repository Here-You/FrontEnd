import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './SignaturePost.style';
import { useGetDetail } from '@/hooks/signature/useGetDetail';
import { CiLocationOn } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const SignaturePostPage = () => {
  const params = useParams();
  const { signatureId } = params;

  const { data: detailSignatures, error, loading } = useGetDetail(signatureId);

  const [step, setStep] = useState(1);

  const totalPages = detailSignatures ? detailSignatures.length : 0;

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
      {detailSignatures && (
        <S.SignatureContainer>
          {detailSignatures[step - 1] && (
            <>
              <S.TitleContainer>
                <h1>제목을 왜 데이터 안주시지...</h1>
              </S.TitleContainer>
              <S.ButtonContainer>
                <button>
                  <FaHeart onClick={() => alert('좋아요')} />
                </button>
                <h3>22</h3>
              </S.ButtonContainer>
              <S.ImageContainer>
                <S.Button onClick={handlePrevPage} disabled={step === 1}>
                  <GrFormPrevious />
                </S.Button>
                <S.Image src={detailSignatures[step - 1].image} />
                <S.Button
                  onClick={handleNextPage}
                  disabled={step === totalPages}>
                  <GrFormNext />
                </S.Button>
              </S.ImageContainer>
              <S.TextContainer>
                <h3>
                  <CiLocationOn />
                  {detailSignatures[step - 1].location}
                </h3>
                <p>{detailSignatures[step - 1].content}</p>
              </S.TextContainer>
            </>
          )}
        </S.SignatureContainer>
      )}
    </>
  );
};

export default SignaturePostPage;
