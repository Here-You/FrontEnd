import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;
const LogoWrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  height: 55%;
`;
const ButtonContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  justify-content: space-around;
  height: 13%;
`;
const StatusText = styled.div`
  color: ${theme.COLOR.MAIN.GREEN};
  font-family: 'Pretendard-bold';
  font-size: 16px;
`;

const StartButton = styled.button`
  width: 110%;
  height: 60%;
  padding: 5px 11px;
  border-radius: 50px;
  background: ${theme.COLOR.MAIN.GREEN};
  outline: none;
  border: none;
  color: ${theme.COLOR.MAIN.WHITE};
  text-align: center;
  font-family: 'Pretendard-bold';
  font-size: 18px;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export { PageContainer, LogoWrapper, ButtonContainer, StartButton, StatusText };
