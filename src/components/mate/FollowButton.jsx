import { useState } from 'react';

import * as S from './FollowButton.style';
import FollowModal from './FollowModal';

const FollowButton = ({ isFollowing, onFollowing, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onFollowing();
  };

  return (
    <>
      <S.FollowButton isFollowing={isFollowing} onClick={handleClick}>
        {isFollowing ? '팔로잉' : '팔로우'}
      </S.FollowButton>
      {isModalOpen && <FollowModal onClose={handleCloseModal} name={name} />}
    </>
  );
};

export default FollowButton;
