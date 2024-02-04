import { useState } from 'react';

import * as S from './FollowButton.style';
import FollowModal from './FollowModal';
import { postFollowMate } from '@/apis/request/mate';
import { deleteUnFollowMate } from '@/apis/request/mate';

const FollowButton = ({ isFollowing, name, followingId }) => {
  const userId = 1; //임의로 지정
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeStatus = () => {
    if (isFollowing) {
      deleteUnFollowMate(userId, followingId);
    } else {
      postFollowMate(userId, followingId);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {
        <S.FollowButton isFollowing={isFollowing} onClick={handleChangeStatus}>
          {isFollowing ? '언팔로우' : '팔로우'}
        </S.FollowButton>
      }
      {isModalOpen && (
        <FollowModal onClose={() => setIsModalOpen(false)} name={name} />
      )}
    </>
  );
};

export default FollowButton;
