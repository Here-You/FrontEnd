import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const CategoryBox = styled.div`
  margin: 40px 10px;
`;
const MyPageCategory = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.XL};
  font-weight: bold;
  margin-bottom: 15px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;
const Subcategory = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;
const SubcategoryContent = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.XL};
  font-weight: 300;

  margin: 13px 0px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;
const CategoryImg = styled.img`
  width: 25px;
  margin-right: 20px;
`;

const LinkTo = styled(Link)`
  text-decoration-line: none;
  display: flex;
 
`;
export {
  MyPageCategory,
  Subcategory,
  CategoryBox,
  CategoryImg,
  SubcategoryContent,
  LinkTo,
};
