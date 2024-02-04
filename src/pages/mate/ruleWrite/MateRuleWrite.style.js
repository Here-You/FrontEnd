import styled from 'styled-components';

import theme from '@/theme';

const PublishButton = styled.button`
  width: 250px;
  height: 60px;
  border-radius: 50px;
  border: none;
  background: ${theme.COLOR.MAIN.HEAVY_GREEN};
  cursor: pointer;

  color: ${theme.COLOR.MAIN.WHITE};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 201px;
    height: 51px;
    border-radius: 50px;
    font-size: 16px;
  }
`;

export { PublishButton };
