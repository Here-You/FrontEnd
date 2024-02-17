import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

const Maincontainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 500px;
  gap: 25px;

  height: 100%;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 320px;
  }
`;

const SpanWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  span {
    color: rgba(0, 0, 0, 0.57);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 14px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
  }
`;

const Title = styled.span`
  ${theme.ALIGN.COLUMN_CENTER};
  color: ${theme.COLOR.MAIN.GREEN};
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 24px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 18px;
  }
`;

const Des = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 45px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 20px;
  }
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export {
  Maincontainer,
  SpanWrapper,
  MenuContainer,
  Title,
  Des,
  CardContainer,
  LinkTo,
};
