import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ProfileContainer = styled.div`
  width: 100%;
  padding: 40px;
  border: 2px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 30px;
  display: flex;
  align-items: self-start;

  h3 {
    font-size: ${FONT_SIZE.TWO_XL};
    font-weight: 700;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.XL};
    }
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: ${FONT_SIZE.LG};
    font-weight: 350;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: ${FONT_SIZE.BASE};
    }
  }
`;

const ProfileInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  line-height: 35px;
  margin-left: 40px;
`;

const NickNameTypeContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  width: 90px;
  border-radius: 50%;
`;

const Mate = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-weight: 350;
  font-size: ${FONT_SIZE.LG};
  margin-top: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;

const NumberOfPeople = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretendard-bold';
  font-size: ${FONT_SIZE.LG};
  margin: 0 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
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
