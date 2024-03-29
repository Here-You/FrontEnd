import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const PreviewWrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  height: 280px;
  width: 200px;
  margin-bottom: 20px;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 300px;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: ${theme.COLOR.MAIN.HEAVY_GREEN};
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 5px;
`;

const Date = styled.div`
  margin-left: 2px;
  font-size: 12px;
`;

const PreviewImg = styled(LazyLoadImage)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid var(--gray2, #c8c8c8);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 200px;
  }
`;

const ContentContainer = styled.div`
  background-color: ${theme.COLOR.MAIN.WHITE};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  border-radius: 10px;
  padding: 8px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: Pretendard-bold;
  font-size: 14px;
  margin: 3px 0px;
  width: 60%;
  color: ${theme.COLOR.MAIN.HEAVY_GREEN};
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

export {
  PreviewImg,
  DateWrapper,
  PreviewWrap,
  Date,
  ContentContainer,
  Title,
  Open,
};
