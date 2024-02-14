import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ProfileContainer = styled.div`
  width: 100%;
  padding: 40px 0 40px 50px;
  border: 2px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 30px;
  display: flex;
  justify-content: start;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 20px 20px;
  }

  h3 {
    font-size: ${FONT_SIZE.TWO_XL};
    font-weight: 700;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.BASE};
    }
  }
  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.LG};
    font-weight: 350;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.XS};
    }
  }
`;

const ProfileInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-left: 50px;
  width: 100%;
  align-items: start;

  line-height: 35px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    line-height: 20px;
    margin-left: 30px;
  }
`;

const NickNameTypeContainer = styled.div`
  display: flex;

  width: 30%;
  justify-content: space-between;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40%;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const Mate = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-weight: 350;
  font-size: ${FONT_SIZE.LG};
  margin-top: 15px;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
    margin-top: 0;
  }
`;

const NumberOfPeople = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretendard-bold';
  font-size: ${FONT_SIZE.LG};
  margin: 0 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
  }
`;

const LinkTo = styled(Link)`
  text-decoration-line: none;
  color: ${theme.COLOR.MAIN.BLACK};
`;

export {
  ProfileContainer,
  ProfileInfoContainer,
  ProfilePicture,
  NickNameTypeContainer,
  Mate,
  NumberOfPeople,
  LinkTo,
};
