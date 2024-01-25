import styled from 'styled-components';

import theme from '@/theme';

const WriteButton = styled.button`
  width: 201px;
  height: 51px;
  border-radius: 50px;
  border: none;
  background: ${theme.COLOR.MAIN.HEAVY_GREEN};
  margin-bottom: 54px;

  span {
    color: ${theme.COLOR.MAIN.WHITE};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.864px;
  }
`;

export { WriteButton };
