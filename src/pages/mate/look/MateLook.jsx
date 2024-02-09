import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './MateLook.style';
import Logo from '/images/mypage/MyPageLogo.svg';
import Banner from '@/components/mate/Banner';
import { useRandomInfiniteMate } from '@/hooks/mate/queries/useRandomInfiniteMate';

const MateLookPage = () => {
  const { data, isFetching, hasNextPage, fetchNextPage, isLoading } =
    useRandomInfiniteMate();
  const randomMates = data?.pages;
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <S.MateLookContainer>
      <Banner />
      <S.CenteredContainer>
        {randomMates?.map(mateData =>
          mateData?.data.data.data.map(mate => {
            return (
              <S.MateBox key={mate._id}>
                <S.MateDescriptionBox>
                  <S.MateImage src={mate.mateImage ? mate.mateImage : Logo} />
                  <S.TextBox>
                    <h1>{mate.mateName}</h1>
                    <p>{mate.introduction}</p>
                    <p>{mate.is_followed}</p>
                  </S.TextBox>
                </S.MateDescriptionBox>
                <S.ImageContainer>
                  {mate?.signatures?.map(signature => (
                    <S.SignatureContainer key={signature._id}>
                      <S.SignatureImage
                        onClick={() =>
                          navigate(`/signature/post/${signature._id}`)
                        }
                        src={signature.image ? signature.image : Logo}
                      />
                      <p>{signature.title}</p>
                    </S.SignatureContainer>
                  ))}
                </S.ImageContainer>
              </S.MateBox>
            );
          }),
        )}
        <div
          ref={ref}
          style={{
            width: '20px',
            height: '20px',
          }}>
          1
        </div>
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
