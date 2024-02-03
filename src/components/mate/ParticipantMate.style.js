import styled from 'styled-components';

import theme from '@/theme';

const ResultContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 240px;
  height: 60px;
  flex-shrink: 0;
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#eee' : 'transparent')};
`;

const UserImg = styled.img`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: fill;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  position: absolute;
  left: 70px;
  height: 100%;
  gap: 1px;

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
