import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-bottom: 10px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 40px;
  padding: 20px;
  cursor: pointer;
  border-radius: 20px;
  width: 95%;

  &:hover {
    background-color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 15px;
  }
`;

const UserImg = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 45px;
  border: none;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserName = styled.span`
  height: 15px;
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: ${FONT_SIZE.SM};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserNickName = styled.span`
  height: 15px;
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.XS};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserBio = styled.span`
  width: 100%;
  height: 15px;
  color: ${theme.COLOR.MAIN.LIGHT_BLACK};
  font-size: ${FONT_SIZE.XS};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div``;

export {
  CenteredContainer,
  ProfileContainer,
  UserImg,
  TextContainer,
  UserName,
  UserNickName,
  UserBio,
  Wrapper,
};
