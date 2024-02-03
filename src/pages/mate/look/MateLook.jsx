import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import * as S from './MateLook.style';
import { getExploreMate } from '@/apis/request/mate';
import Banner from '@/components/mate/Banner';
import MateSignatureSection from '@/components/mate/MateSignatureSection';
import { useInfiniteQuery } from '@tanstack/react-query';

const MateLookPage = () => {
  const userId = 1;
  const limit = 10;

  const { fetchNextPage, hasNextPage, isFetching, data, isError, isLoading } =
    useInfiniteQuery({
      queryKey: ['exploreMate', userId],
      queryFn: ({ pageParam = 0 }) => getExploreMate(userId, pageParam, limit),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        const lastMate =
          lastPage.data.data.recommend_mates[0].mates.slice(-1)[0];
        return lastMate ? lastMate._id : undefined;
      },
    });

  const { ref, inView } = useInView({
    delay: 0,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      hasNextPage && fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  console.log(data?.pages[0].data.data.recommend_mates[0].information.nickname);

  const nickname =
    data?.pages[0].data.data.recommend_mates[0].information.nickname;
  const location =
    data?.pages[0].data.data.recommend_mates[0].information.location;
  return (
    <S.MateLookContainer>
      <Banner />
      <S.Title>
        {nickname}님이 사용한 위치 [#{location}]를 함께 이용 중인 메이트
      </S.Title>

      <S.CenteredContainer>
        {data?.pages.map(d => (
          <S.MateContainer>
            {console.log(d)}
            {d?.data.data.recommend_mates[0].mates.map(m => (
              <S.MateBox>
                <S.MateDescriptionBox>
                  <S.MateImage src={m.image} />
                  <S.TextBox>
                    <h1>{m.nickname}</h1>
                    <p>{m.bio}</p>
                  </S.TextBox>
                </S.MateDescriptionBox>
                <S.ImageContainer>
                  {m.signature.map(s => {
                    return (
                      <S.SignatureContainer key={s._id}>
                        <S.SignatureImage src={s.image} />
                        <p>{s.title}</p>
                      </S.SignatureContainer>
                    );
                  })}
                  <div ref={ref} style={{ width: '10px' }}></div>
                </S.ImageContainer>
              </S.MateBox>
            ))}
          </S.MateContainer>
        ))}
      </S.CenteredContainer>
    </S.MateLookContainer>
  );
};

export default MateLookPage;
