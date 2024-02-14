import { useState } from 'react';
import styled from 'styled-components';

import * as S from './FollowButton.style';
import { postFollowMate } from '@/apis/request/mate';
import theme from '@/theme';

const FollowButton2 = ({ initialFollowState, id }) => {
  const [follow, setFollow] = useState(initialFollowState);

  const handleChangeFollowState = async e => {
    e.stopPropagation();
    try {
      if (follow === true) {
        const res = await postFollowMate(id);
        console.log(res);
        alert('팔로우가 취소되었습니다.');
        setFollow(false);
      } else {
        const res = await postFollowMate(id);
        console.log(res);
        alert('팔로잉되었습니다.');
        setFollow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button onClick={handleChangeFollowState} follow={follow}>
      {follow ? '팔로잉' : '팔로우'}
    </Button>
  );
};

export default FollowButton2;
const Button = styled.button`
  border: ${props =>
    props.follow ? 'none' : `0.2px solid ${theme.COLOR.MAIN.GRAY}`};
  background-color: ${props =>
    props.follow ? theme.COLOR.MAIN.LIGHT_GREEN : theme.COLOR.MAIN.WHITE};
  color: ${props =>
    props.follow ? (
      <theme className="COLOR MAIN BLA"></theme>
    ) : (
      theme.COLOR.MAIN.BLACK
    )};
  padding: 5px 18px;
  border-radius: 10px;
  margin-top: 5px;

  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  width: 120px;
  &:hover {
    transform: scale(0.9);
  }
`;
