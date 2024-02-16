import styled, { keyframes } from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  background-color: #f7f7f7;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: 25%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export { Wrapper, PageContainer, Container2 };
