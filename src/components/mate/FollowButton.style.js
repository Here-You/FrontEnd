import styled from 'styled-components';

import theme from '@/theme';

const Button = styled.button`
  border: none;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  color: ${theme.COLOR.MAIN.GRAY};
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

export { Button };
