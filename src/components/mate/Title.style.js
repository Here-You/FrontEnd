import styled from 'styled-components';

import theme from '@/theme';

const StyledSpan = styled.span`
  display: flex;
  width: auto;
  height: 23px;
  flex-direction: column;
  justify-content: center;

  color: ${theme.COLOR.MAIN.GREEN};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export { StyledSpan };
