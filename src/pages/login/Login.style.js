import styled from 'styled-components';
import theme from '@/theme';

const LoginContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;
`;
const LogoImg = styled.img`
  width: 50%;
  margin-bottom: 100px;
`;

export { LoginContainer, LogoImg };
