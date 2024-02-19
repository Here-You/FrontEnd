import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ProfileContainer = styled.div`
  width: 100%;
  min-width: 300px;
  padding: 40px;
  border: 2px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    padding: 20px;
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
  align-items: start;

  line-height: 35px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    line-height: 20px;
  }
`;

const NickNameTypeContainer = styled.div`
  width: 100%;
  white-space: nowrap;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 40%;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 100px;
  width: 100px;
  height: 100px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50px;
    height: 50px;
  }
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

const FollowContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

const NumberOfPeople = styled.span`
  ${theme.ALIGN.ROW_CENTER};
  color: ${theme.COLOR.MAIN.BLACK};
  font-family: 'Pretendard-bold';
  font-size: ${FONT_SIZE.LG};
  gap: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XS};
  }

  p {
    color: ${theme.COLOR.MAIN.GRAY};
  }
`;

const Button = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.LIGHT_GREEN};
  cursor: pointer;
  color: black;
  &:hover {
    transform: scale(0.9);
  }
`;

const LinkTo = styled(Link)`
  text-decoration-line: none;
  color: ${theme.COLOR.MAIN.BLACK};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export {
  ProfileContainer,
  ProfileInfoContainer,
  ProfilePicture,
  NickNameTypeContainer,
  FollowContainer,
  Mate,
  NumberOfPeople,
  Button,
  LinkTo,
  ContentContainer,
};
