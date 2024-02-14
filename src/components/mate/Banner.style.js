import styled from 'styled-components';

import theme from '@/theme';

const BannerContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 99px;
  background: rgba(27, 156, 133, 0.16);
  position: relative;
`;

const TitleContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 112px;
  height: 29px;
  border-radius: 20px;
  background-color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  position: absolute;
  left: 20px;
  top: 14px;
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
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  position: absolute;
  left: 20px;
  top: 53px;

  span {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export { BannerContainer, TitleContainer, Contents };
