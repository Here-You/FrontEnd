import { Link } from 'react-router-dom';
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

const RuleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { MainContainer, CardContainer, RuleCardContainer, LinkTo };
