import styled from 'styled-components';

import theme from '@/theme';

const FollowButton = styled.button`
  width: 74px;
  height: 26px;
  border-radius: 14px;
  border: none;
  background-color: ${props =>
    props.isFollowing ? theme.COLOR.MAIN.GRAY : theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
    width: 52px;
    height: 16px;
    border-radius: 10px;
  }
`;

export { FollowButton };
