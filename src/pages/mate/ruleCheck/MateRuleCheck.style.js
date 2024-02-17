import styled, { keyframes } from 'styled-components';

import theme from '@/theme';

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const StyledTitle = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 35px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 18px;
  }
`;

const SkeletonTitle = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  animation: ${skeletonGradient} 1.5s infinite;
  margin-bottom: 35px;
`;

export { StyledTitle, SkeletonTitle };
