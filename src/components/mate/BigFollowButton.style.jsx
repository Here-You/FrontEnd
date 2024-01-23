import styled from 'styled-components';

import theme from '@/theme';

const FollowButton = styled.button`
  background-color: ${props =>
    props.isFollowing ? theme.COLOR.MAIN.GRAY : theme.COLOR.MAIN.GREEN};
  border-radius: 30px;
  border: transparent;
  padding: 5px 11px;
  gap: 10px;
  width: 54px;
  height: 24px;

  span {
    color: ${theme.COLOR.MAIN.WHITE};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export { FollowButton };
