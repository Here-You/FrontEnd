import { QuitUserPage } from '..';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './ProfilePage.style';
import ProfileSkeleton from './skeleton/ProfileSkeleton';
import Heart from '/images/signature/ClickedHeart.svg';
import { ProfileBox } from '@/components';
import { useInfiniteSignatureList } from '@/hooks/profile/queries/useInfiniteSignatureList';
import { useProfileData } from '@/hooks/profile/queries/useProfileData';

const ProfilePage = () => {
  const [hoveredSignature, setHoveredSignature] = useState(null);
  const { userId } = useParams();
  const { data, isPending, isError } = useProfileData(userId);
  const profileData = data?.data?.data;
  const quitUser = profileData?.isQuit;

  const navigate = useNavigate();

  const {
    data: signatures,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteSignatureList(userId);

  const signaturesList = signatures?.pages;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const handleMouseOver = signatureId => {
    setHoveredSignature(signatureId);
  };

  const handleMouseOut = () => {
    setHoveredSignature(null);
  };

  if (isError) {
    return <QuitUserPage type={'not-login'} />;
  }

  // 기존 유저 중 탈퇴한 회원일 때
  if (quitUser) {
    return <QuitUserPage type={'quit'} />;
  }

  // 아직 가입하지 않은 회원의 마이페이지에 접근했을 경우.
  if (profileData === null) {
    return <QuitUserPage type={'non-user'} />;
  }

  return (
    <S.Container>
      {isPending || isLoading ? (
        <ProfileSkeleton />
      ) : (
        <>
          <ProfileBox profile={profileData} />
          <S.GridContainer>
            {signaturesList?.map(signature => {
              return signature?.data?.data?.data?.map(s => (
                <S.ImageContainer
                  key={s?._id}
                  onMouseOver={() => handleMouseOver(s?._id)}
                  onMouseOut={handleMouseOut}>
                  <S.Image src={s?.image} alt={s?.title} />
                  {hoveredSignature === s._id && (
                    <S.DescriptionContainer
                      onClick={() => navigate(`/signature/post/${s?._id}`)}>
                      <h1>{s?.title}</h1>
                      <div>
                        <img src={Heart} />
                        {s?.liked}
                      </div>
                    </S.DescriptionContainer>
                  )}
                </S.ImageContainer>
              ));
            })}
          </S.GridContainer>
          <div
            ref={ref}
            style={{
              height: '10px',
            }}></div>
        </>
      )}
    </S.Container>
  );
};

export default ProfilePage;
