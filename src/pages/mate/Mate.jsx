import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import * as S from './Mate.style';
import MateMainPage from './main/MateMain';
import Logo from '/images/mypage/MyPageLogo.svg';
import { postFollowMate } from '@/apis/request/mate';
import { CountInfo } from '@/components';
import Search from '@/components/mate/Search';
import { useGetSearchInfiniteNickname } from '@/hooks/mate/queries/useGetSearcInfiniteNickname';
import useDebounce from '@/hooks/useDebounce';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MatePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm, 2000);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isFetching, hasNextPage, fetchNextPage } =
    useGetSearchInfiniteNickname(debouncedValue, 2);

  const searchMembers = data?.pages;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const { mutateAsync } = useMutation({
    mutationFn: postFollowMate,
    onSuccess: () => {
      queryClient.invalidateQueries(['searchNickname']);
    },
    onError: () => {
      toast.error('팔로우 요청을 실패했습니다. 나중에 다시 시도해주세요.');
    },
    onSettled: isSuccess => {
      console.log(isSuccess);
      if (isSuccess.data.success === true) {
        toast.success(isSuccess.data.message);
      } else {
        toast.error(isSuccess.data.message);
      }
    },
  });

  return (
    <S.Container>
      <Search setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        searchMembers?.map(members => {
          return members?.data?.data?.data.map(member => (
            <S.ProfileContainer
              key={member?.id}
              onClick={() => navigate(`/profile/${member?.id}`)}>
              <S.ProfileImage src={member.image ? member.image : Logo} />
              <S.IntroContainer>
                <S.NickNameContainer>
                  <h1>{member.nickName}</h1>
                  <S.FollowButton
                    follow={member.isFollowing}
                    onClick={async e => {
                      e.stopPropagation();
                      try {
                        await mutateAsync(member.id);
                      } catch (e) {
                        console.error(e);
                      }
                    }}>
                    {member.isFollowing === true ? '언팔로우' : '팔로우'}
                  </S.FollowButton>
                </S.NickNameContainer>
                <S.InfoContainer>{member.introduction}</S.InfoContainer>
                <S.CountContainer>
                  <CountInfo title="팔로워" count={member.followerCnt} />
                  <CountInfo title="팔로우" count={member.followingCnt} />
                </S.CountContainer>
              </S.IntroContainer>
              <div
                ref={ref}
                style={{
                  height: '5px',
                }}></div>
            </S.ProfileContainer>
          ));
        })
      ) : (
        <MateMainPage />
      )}
    </S.Container>
  );
};

export default MatePage;
