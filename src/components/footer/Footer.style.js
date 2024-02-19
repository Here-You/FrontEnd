import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;

  background-color: ${theme.COLOR.MAIN.WHITE};
  color: ${theme.COLOR.MAIN.BLACK};

  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  padding: 0 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 60px;
  }
`;

const Image = styled.img`
  height: 46px;
  object-fit: cover;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 30px;
  }
`;

const LinkTo = styled(Link)`
  ${theme.ALIGN.COLUMN_CENTER}
  text-decoration: none;

  color: ${props =>
    props.active ? theme.COLOR.MAIN.HEAVY_GREEN : theme.COLOR.MAIN.BLACK};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    p {
      font-size: 15px;
    }
  }
`;

export { FooterWrapper, Image, LinkTo };
