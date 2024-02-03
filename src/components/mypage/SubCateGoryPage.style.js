import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const CategoryContainer = styled.div`
  margin: 40px 0px 20px;

  h2 {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.XL};
    font-weight: bold;
    margin-bottom: 15px;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.BASE};
    }
  }

 
`;

const Subcategory = styled.div`
  &:hover {
    background-color: #f4f2f2;
    border-radius: 10px;
    padding: 0 2px;
  }
`;

const CategoryImg = styled.img`
  width: 25px;
  margin-right: 20px;
`;

const LinkTo = styled(Link)`
  text-decoration-line: none;
  display: flex;
  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.XL};
    font-family: 'Pretendard-light';
    margin: 13px 0px;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.BASE};
    }
  }
`;

export { CategoryContainer, Subcategory, CategoryImg, LinkTo };
