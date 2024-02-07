import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Date = styled.div`
  margin-left: 2px;
  font-size: 12px;
`;

const PreviewImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);
`;

const Title = styled.h1`
  font-family: Pretendard-bold;
  font-size: 14px;
  margin: 3px 0px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Open = styled(Link)`
  display: flex;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: ${theme.COLOR.MAIN.GRAY};
`;

export { PreviewImg, DateWrapper, PreviewWrap, Date, Title, Open };
