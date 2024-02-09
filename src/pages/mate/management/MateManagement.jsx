import React, { useState } from 'react';

import MateContainer from '../MateContainer';
import * as S from './MateManagement.style';
// import ManagementProfile from '@/components/mate/ManagementProfile'
import { useMateFollower } from '@/hooks/mate/useMateFollower';
import { useMateFollowing } from '@/hooks/mate/useMateFollowing';

const MateManagementPage = () => {
  const { data: dataFollower, loading, error } = useMateFollower();
  const { data: dataFollowing, loadingF, errorF } = useMateFollowing();
  const [activeTab, setActiveTab] = useState('follower');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

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
        {activeTab === 'follower'
          ? dataFollower.map((data, index) => (
              <ManagementProfile key={index} profileData={data} />
            ))
          : dataFollowing.map((data, index) => (
              <ManagementProfile key={index} profileData={data} />
            ))}
      </S.ProfileContainer>
    </MateContainer>
  );
};

export default MateManagementPage;
