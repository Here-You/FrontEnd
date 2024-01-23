import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 375px;
  height: 85px;
  position: relative;
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: none;
  position: absolute;
  left: 47px;
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 140px;
  gap: 3px;
  position: absolute;
  left: 121px;
`;

const UserName = styled.span`
  height: 15px;
  color: var(--black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserNickName = styled.span`
  height: 15px;
  color: #aaa;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserBio = styled.span`
  width: 100%;
  height: 15px;
  color: var(--black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  white-space: nowrap; //너무 길 경우 ...으로
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 51px;
`;

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
