import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateLook.style';
import explore2 from '/images/explore2.svg';
import signature2 from '/images/signature2.svg';
import Banner from '@/components/mate/Banner';
import MateBox from '@/components/mate/MateBox';
import { useRandomInfiniteMate } from '@/hooks/mate/queries/useRandomInfiniteMate';
import { useGetLocationMate } from '@/hooks/mate/useGetLocationMate';

const MateLookPage = () => {
  const { data: locationMate, loading, error } = useGetLocationMate();

  const { data, isFetching, hasNextPage, fetchNextPage, isLoading } =
    useRandomInfiniteMate();
  const randomMates = data?.pages;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (loading) {
    return <div>로딩 중입니다..</div>;
  }

  return (
    <S.MateLookContainer>
      <Banner />
      {locationMate ? (
        <>
          <S.Title>오늘의 랜덤 메이트 추천</S.Title>
          <S.CenteredContainer>
            {locationMate?.mateProfiles &&
              randomMates?.map(mateData =>
                mateData?.data.data.data.map(mate => (
                  <MateBox key={mate._id} mate={mate} />
                )),
              )}
            <div
              ref={ref}
              style={{
                width: '20px',
              }}></div>
          </S.CenteredContainer>
          <S.Title>{`${locationMate?.userName}이 사용한 위치 [${locationMate?.location}]을 함께 이용중인 메이트들`}</S.Title>
          <S.CenteredContainer>
            {locationMate?.mateProfiles?.length > 0 ? (
              locationMate.mateProfiles.map(mate => (
                <MateBox key={mate._id} mate={mate} />
              ))
            ) : (
              <p>메이트가 없습니다.</p>
            )}
          </S.CenteredContainer>
        </>
      ) : (
        <S.AlertLayout>
          <S.AlertMessage>
            <p>
              시그니처 <span>#태그</span> 등록하고 함께{'\n'}
              이용중인 메이트들 찾아볼까요?
            </p>
          </S.AlertMessage>

          <S.AlertContainer to={'/explore'}>
            <S.Icon src={signature2} />
            <p>나와 딱 맞는 메이트{'\n'}시그니처로 찾아보기 🚙</p>
          </S.AlertContainer>
          <S.AlertContainer to={'/signature'}>
            <S.Icon src={explore2} />
            <p>나만의 여행 시그니처{'\n'}#태그 만들러 가기 🗓️</p>
          </S.AlertContainer>
        </S.AlertLayout>
      )}
    </S.MateLookContainer>
  );
};

export default MateLookPage;
