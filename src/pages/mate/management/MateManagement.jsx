import React, { useState } from 'react';

import MateContainer from '../MateContainer';
import * as S from './MateManagement.style';
import ManagementProfile from '@/components/mate/ManagementProfile';
import ManagementProfileSkeleton from '@/components/mate/skeleton/ManagementProfileSkeleton';
import { useMateFollower } from '@/hooks/mate/useMateFollower';
import { useMateFollowing } from '@/hooks/mate/useMateFollowing';

const MateManagementPage = () => {
  const {
    data: follower,
    loading: followerLoading,
    error: followerError,
  } = useMateFollower();
  const {
    data: following,
    loading: followingLoading,
    error: followingError,
  } = useMateFollowing();

  console.log(following);

  const [activeTab, setActiveTab] = useState('following');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  const followerSkeletons = Array.from(
    { length: follower?.length },
    (_, index) => <ManagementProfileSkeleton key={index} />,
  );

  const followingSkeletons = Array.from(
    { length: following?.length || 5 },
    (_, index) => <ManagementProfileSkeleton key={index} />,
  );

  return (
    <MateContainer>
      <S.TabContainer>
        <S.TabElement
          active={activeTab === 'follower'}
          onClick={() => handleTabClick('follower')}>
          팔로워
        </S.TabElement>
        <S.TabElement
          active={activeTab === 'following'}
          onClick={() => handleTabClick('following')}>
          팔로잉
        </S.TabElement>
      </S.TabContainer>

      <S.ProfileContainer>
        {/* Follower Loading */}
        {activeTab === 'follower' && followerLoading && followerSkeletons}
        {/* Following Loading */}
        {activeTab === 'following' && followingLoading && followingSkeletons}
        {/* Follower Not Load */}
        {activeTab === 'follower' && !followerLoading && (
          <>
            {follower?.map((data, index) => (
              <ManagementProfile key={index} profileData={data} />
            ))}
          </>
        )}
        {/* Following Not Load */}
        {activeTab === 'following' && !followingLoading && (
          <>
            {following?.map((data, index) => (
              <ManagementProfile key={index} profileData={data} />
            ))}
          </>
        )}
      </S.ProfileContainer>
    </MateContainer>
  );
};

export default MateManagementPage;
