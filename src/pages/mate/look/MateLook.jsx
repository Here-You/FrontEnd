import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateLook.style';
import explore2 from '/images/explore2.svg';
import Banner from '@/components/mate/Banner';
import MateBox from '@/components/mate/MateBox';
import MateRecsys from '@/components/mate/MateRecsys';
import MateBoxSkeleton from '@/components/mate/skeleton/MateBoxSkeleton';
import MateRecsysSkeleton from '@/components/mate/skeleton/MateRecsysSkeleton';
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

  return (
    <S.MateLookContainer>
      <Banner />
      <S.BoxContainer>
        <S.Title>오늘의 랜덤 메이트 추천</S.Title>
        <S.CenteredContainer>
          {isLoading
            ? new Array(5).fill(0).map(() => <MateRecsysSkeleton />)
            : randomMates?.map(mateData =>
                mateData?.data.data.data.map(mate => (
                  <MateRecsys key={mate._id} mate={mate} />
                )),
              )}
          <div
            ref={ref}
            style={{
              width: '20px',
            }}></div>
        </S.CenteredContainer>
      </S.BoxContainer>
      <S.BoxContainer>
        {locationMate ? (
          <>
            {!loading && (
              <S.Title>
                {`${locationMate?.userName}님의 시그니처 `}
                <h3>[{locationMate?.location}]</h3>
                {'를 함께 이용 중인 메이트 추천'}
              </S.Title>
            )}

            <S.CenteredContainer>
              {loading
                ? new Array(5).fill(0).map(() => <MateBoxSkeleton />)
                : locationMate?.mateProfiles &&
                  (locationMate?.mateProfiles.length > 0 ? (
                    locationMate?.mateProfiles.map(mate => (
                      <MateBox key={mate._id} mate={mate} />
                    ))
                  ) : (
                    <div>
                      {`[${locationMate?.location}]`}를 사용하는 메이트가
                      없습니다.
                    </div>
                  ))}
              {}
            </S.CenteredContainer>
          </>
        ) : (
          <>
            <S.AlertMessage>
              <p>
                시그니처 <span>#태그</span> 등록하고 함께{'\n'}
                이용중인 메이트들 찾아볼까요?
              </p>
            </S.AlertMessage>
            <S.AlertContainer to={'/signature'}>
              <S.Icon src={explore2} />
              <p>나만의 여행 시그니처 #태그 만들러 가기 🗓️</p>
            </S.AlertContainer>
          </>
        )}
      </S.BoxContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
