import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => (props.$dataLength > 1 ? '0' : '10px')};
`;

export { Container };
