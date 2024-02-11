import styled from 'styled-components';

import theme from '@/theme';

const BannerContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 150px;
  background: rgba(27, 156, 133, 0.16);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: ${theme.COLOR.MAIN.GREEN};
  justify-content: space-around;
  padding: 5px 11px;
  width: 150px;
  color: white;
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  font-family: 'Pretendard-semibold';
`;

const ContentContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 3px;
  align-items: flex-start;
  margin: 5px;

  color: ${theme.COLOR.MAIN.GRAY};
`;

const Content = styled.div`
  display: flex;
  margin-top: 3px;
  font-size: 12px;
`;

export { BannerContainer, ButtonContainer, Button, Content, ContentContainer };
