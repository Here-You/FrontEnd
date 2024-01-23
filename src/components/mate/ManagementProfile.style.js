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

const UserNickname = styled.span`
  height: 15px;
  color: var(--black, #333);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserId = styled.span`
  height: 15px;
  color: #aaa;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
`;

const UserAbout = styled.span`
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

const FollowButton = styled.button`
  background-color: ${theme.COLOR.MAIN.GREEN};
  border-radius: 30px;
  border: transparent;
  padding: 5px 11px;
  gap: 10px;
  position: absolute;
  left: 270px;

  span {
    color: var(--main, #fff);
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export {
  CenteredContainer,
  ProfileContainer,
  UserImg,
  TextContainer,
  UserNickname,
  UserId,
  UserAbout,
  FollowButton,
};
