import styled from 'styled-components';

import theme from '@/theme';

const BannerContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 375px;
  height: 99px;
  background: rgba(27, 156, 133, 0.16);
  position: relative;
  margin-bottom: 18px;
`;

const TitleContainer = styled.div`
  width: 112px;
  height: 29px;
  border-radius: 20px;
  background-color: #1b9c85;
  position: absolute;
  left: 20px;
  top: 14px;
  ${theme.ALIGN.ROW_CENTER};
  gap: 2.51px;

  img {
    width: 20.345px;
    height: 13.494px;
  }

  span {
    color: ${theme.COLOR.MAIN.WHITE};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.864px;
  }
`;

const Contents = styled.div`
  position: absolute;
  left: 20px;
  top: 53px;
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;

  span {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export { BannerContainer, TitleContainer, Contents };
