import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import DiarySkeleton from '../skeleton/DiarySkeleton';
import * as S from './MyDiary.style';
import BannerDiary from '@/components/banner/BannerMyDiary';
import { MOOD_ICON_LIST, WEATHER_ICON_LIST } from '@/constants/dailyRecord';
import { useInfiniteDiaryList } from '@/hooks/myPage/queries/useInfiniteDiary';

const MyDiary = () => {
  const navigate = useNavigate();
  const { data, isFetching, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteDiaryList();
  const diaryList = data?.pages;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      <S.Header>
        <BannerDiary />
      </S.Header>
      <S.StyledMyDiary>
        {isLoading
          ? new Array(10).fill(0).map(() => <DiarySkeleton />)
          : diaryList?.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page?.data?.data?.diaries?.map((diary, index) => (
                  <S.DiaryCard
                    key={index}
                    onClick={() =>
                      navigate(`/dailyrecord?scheduleId=${diary?.scheduleId}`)
                    }>
                    <S.DiaryImage src={diary?.diary_image.url} />
                    <S.Title>{diary?.title}</S.Title>
                    <S.Subtitle>{diary?.place}</S.Subtitle>
                    <S.EmojiContainer>
                      {WEATHER_ICON_LIST.map(item => {
                        if (item.iconName === diary?.weather) {
                          return (
                            <S.EmojiImage key={item.id} src={item.iconUrl} />
                          );
                        }
                      })}
                      {MOOD_ICON_LIST.map(item => {
                        if (item.iconName === diary?.mood) {
                          return (
                            <S.EmojiImage key={item.id} src={item.iconUrl} />
                          );
                        }
                      })}
                    </S.EmojiContainer>
                    <S.Date>{diary.date}</S.Date>
                    <S.Content>{diary.content}</S.Content>
                  </S.DiaryCard>
                ))}
              </React.Fragment>
            ))}
        <div
          ref={ref}
          style={{
            height: '10px',
          }}></div>
      </S.StyledMyDiary>
    </>
  );
};

export default MyDiary;
