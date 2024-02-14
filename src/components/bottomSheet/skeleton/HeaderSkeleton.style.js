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

const HeaderWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
`;

const HeaderContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`;

const DateContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 2px;
  margin-top: 10px;
`;

const MarkImage = styled.img`
  height: 40px;
`;

const ListWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  margin: 20px;
`;

const ListContainer = styled.div`
  border-radius: 20px;
  width: 90%;
  padding: 20px 40px;
  ${theme.ALIGN.ROW_CENTER};
  gap: 60px;
`;

const ListDescriptionContainer = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100px;
  padding: 15px;
  animation: ${skeletonGradient} 1.5s infinite;
  border-radius: 20px;
`;

const Content = styled.div`
  width: 200px;
  padding: 15px;
  animation: ${skeletonGradient} 1.5s infinite;
  border-radius: 20px;
`;

export {
  HeaderWrapper,
  HeaderContainer,
  DateContainer,
  MarkImage,
  ListWrapper,
  ListContainer,
  ListDescriptionContainer,
  Title,
  Content,
};
