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

const SkeletonUserInfo = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const SkeletonRules = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  width: 450px;
  height: 80px;
  border-radius: 10px;
  background-color: #ffffff;
  animation: ${skeletonGradient} 1.5s infinite;
  margin-bottom: 15px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 327px;
    height: 62px;
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;

const SkeletonProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ffffff;
  animation: ${skeletonGradient} 1.5s infinite;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 26px;
    height: 26px;
  }
`;

const SkeletonProfileDesc = styled.div`
  background-color: #ffffff;
  animation: ${skeletonGradient} 1.5s infinite;
  width: 40px;
  height: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 30px;
    height: 10px;
  }
`;

const SkeletonRuleTitle = styled.div`
  background-color: #ffffff;
  animation: ${skeletonGradient} 1.5s infinite;
  width: 300px;
  height: 50px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 240px;
    height: 40px;
  }
`;

export {
  SkeletonUserInfo,
  SkeletonRules,
  SkeletonProfile,
  SkeletonProfileDesc,
  SkeletonRuleTitle,
};
