import styled from 'styled-components';

import theme from '@/theme';

const Button = styled.button`
  border: ${props =>
    props.follow ? `0.2px solid ${theme.COLOR.MAIN.GRAY}` : 'none'};
  background-color: ${props =>
    props.follow ? theme.COLOR.MAIN.LIGHT_GRAY : theme.COLOR.MAIN.LIGHT_GREEN};
  color: ${theme.COLOR.MAIN.GRAY};
  padding: 5px 18px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

export { Button };
