import { useState } from 'react';

import * as S from './FollowButton.style';
import FollowModal from './FollowModal';
import { postFollowMate } from '@/apis/request/mate';
import { deleteUnFollowMate } from '@/apis/request/mate';

const FollowButton = ({ isFollowing, name, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeStatus = () => {
    if (isFollowing) {
      deleteUnFollowMate(id);
      setIsModalOpen(true);
    } else {
      postFollowMate(id);
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
        <FollowModal
          onClose={() => setIsModalOpen(false)}
          name={name}
          isFollowing={isFollowing}
        />
      )}
    </>
  );
};

export default FollowButton;
