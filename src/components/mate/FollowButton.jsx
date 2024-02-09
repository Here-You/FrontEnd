import { useState } from 'react';

import * as S from './FollowButton.style';
import { postFollowMate } from '@/apis/request/mate';

const FollowButton = ({ initialFollowState, id }) => {
  const [follow, setFollow] = useState(initialFollowState);

  const handleChangeFollowState = async () => {
    try {
      if (follow === true) {
        await postFollowMate(id);
        alert('팔로우가 취소되었습니다.');
        setFollow(false);
      } else {
        await postFollowMate(id);
        alert('팔로잉되었습니다.');
        setFollow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Button onClick={handleChangeFollowState}>
      {follow ? '언팔로우' : '팔로우'}
    </S.Button>
  );
};

export default FollowButton;
