import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const ProfileBox = styled.div`
  width: 100%;
  padding: 40px;
  border: 2px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  border-radius: 30px;
  display: flex;
  align-items: self-start;
`;
const ProfileInfoBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  line-height: 35px;
  margin-left: 40px;
`;
const NickNameTypeBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
const ProfilePicture = styled.img`
  width: 90px;
  border-radius: 50%;
`;
const NickName = styled.div`
  font-size: ${FONT_SIZE.TWO_XL};
  font-weight: 700;
  font-family: 'Pretendard';
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.XL};
  }
`;
const Email = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.LG};
  font-weight: 350;
  font-family: 'Pretendard';
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;
const Introduction = styled.div`
  font-family: 'Pretendard';
  font-size: ${FONT_SIZE.LG};
  font-weight: 350;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;
const Mate = styled.div`
  color: ${theme.COLOR.MAIN.GRAY};
  font-weight: 350;
  font-size: ${FONT_SIZE.LG};
  font-family: 'Pretendard';
  margin-top: 20px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
  }
`;
export {
  ProfileBox,
  ProfileInfoBox,
  ProfilePicture,
  Introduction,
  Email,
  NickName,
  NickNameTypeBox,
  Mate,
};
