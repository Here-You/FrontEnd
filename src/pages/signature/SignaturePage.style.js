import styled from 'styled-components';

import theme from '@/theme';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background: rgba(27, 156, 133, 0.16);
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 7vh;
`;
const Button = styled.button`
  background-color: white;
  font-family: 'Pretendard-bold';
  font-size: 16px;
  display: flex;
  border: none;
  border-bottom: ${props =>
    props.selected
      ? `2px solid ${theme.COLOR.MAIN.GREEN}`
      : `2px solid ${theme.COLOR.MAIN.WHITE}`};
  padding: 10px 0px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props =>
    props.selected ? theme.COLOR.MAIN.BLACK : theme.COLOR.MAIN.GRAY};
  align-items: center;
  &:hover {
    color: ${theme.COLOR.MAIN.BLACK};
  }
`;

export { BannerContainer, PageContainer, ButtonContainer, Button };
