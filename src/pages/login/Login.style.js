import styled from 'styled-components';
import theme from '@/theme';


const LoginContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-around;
  height: 100%;
`;

const LogoImg = styled.img`
  width: 50%;
  margin-bottom: 100px;
`;

const ButtonWrap = styled.div`
  width: 70%;
`;



export { LoginContainer, LogoImg, ButtonWrap};
