import styled from 'styled-components';

import theme from '@/theme';

const ResultContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 100%;
  height: 60px;
`;

const UserImg = styled.img`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: 33.24px;
  height: 33.24px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  position: absolute;
  left: 100px;
  height: 100%;
  gap: 2px;

  span {
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 8.864px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.638px;
    padding: 1px;
  }

  span:nth-child(2) {
    color: #aaa;
  }
`;

export { ResultContainer, UserImg, TextContainer };
