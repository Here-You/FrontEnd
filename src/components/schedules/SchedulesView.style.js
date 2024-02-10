import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: ${props => (props.$showContainer ? '500px' : '0px')};
  overflow: ${props => (props.$showContainer ? 'scroll' : '')};
`;

export { Container };
