import styled from 'styled-components';

import theme from '@/theme';

const FollowButton = styled.button`
  width: 50px;
  height: 24px;
  text-align: center;
  border-radius: 10px;
  border: none;
  background-color: ${props =>
    props.isFollowing ? theme.COLOR.MAIN.GRAY : theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  cursor: pointer;
  font-size: 10px;
`;

export { FollowButton };
