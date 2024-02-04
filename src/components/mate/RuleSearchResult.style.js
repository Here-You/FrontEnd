import styled from 'styled-components';

import theme from '@/theme';

const ResultContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-evenly;
  width: 300px;
  height: 90px;
  flex-shrink: 0;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#eee' : 'transparent')};

  &:nth-child(1) {
    margin-top: 90px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 200px;
    height: 60px;
    border-radius: 5px;
  }
`;

const UserImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  object-fit: fill;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  width: 160px;
  gap: 4px;

  p {
    width: 100%;
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.638px;
    padding: 1px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  p:nth-child(2) {
    color: #aaa;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    border-radius: 40px;
    width: 110px;
    gap: 2px;

    p {
      font-size: 9px;
    }
  }
`;

export { ResultContainer, UserImg, TextContainer };
