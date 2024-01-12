import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  gap: 18px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export { MainContainer, CardContainer };
