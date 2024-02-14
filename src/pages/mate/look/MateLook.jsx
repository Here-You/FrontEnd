import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateLook.style';
import Banner from '@/components/mate/Banner';
import MateBox from '@/components/mate/MateBox';
import { useRandomInfiniteMate } from '@/hooks/mate/queries/useRandomInfiniteMate';
import { useGetLocationMate } from '@/hooks/mate/useGetLocationMate';

const MateLookPage = () => {
  const { data: locationMate, loading, error } = useGetLocationMate();
  const { mateProfiles, userName, location } = locationMate;

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
          {randomMates?.map(mateData =>
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
      </S.BoxContainer>
      <S.Title>{`${userName}이 사용한 위치 [${location}]을 함께 이용중인 메이트들`}</S.Title>
      <S.CenteredContainer>
        {mateProfiles?.map(mate => (
          <MateBox key={mate._id} mate={mate} />
        ))}
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
