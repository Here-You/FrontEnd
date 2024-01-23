import styled from 'styled-components';

import theme from '@/theme';

const FollowButton = styled.button`
  width: 46px;
  height: 14px;
  border-radius: 10px;
  border: none;
  background-color: ${props =>
    props.isFollowing ? theme.COLOR.MAIN.GRAY : theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export { FollowButton };
