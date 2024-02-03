import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-bottom: 30px;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 293px;
  height: 136px;
  border-radius: 10px;
  background: ${theme.COLOR.MAIN.WHITE};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const UserImg = styled.img`
  position: absolute;
  margin-left: 27px;
  margin-top: 29px;
  width: 78px;
  height: 78px;
  border-radius: 78px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  margin-left: 140px;
  margin-top: 30px;
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NameAndFollow = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const UserId = styled.span`
  color: #aaa;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserAbout = styled.span`
  color: var(--black, #333);
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FollowContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
`;

const FollowData = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 10px;
`;

const UserFollow = styled.span`
  color: #aaa;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserFollowNumber = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 25px;
`;

export {
  CenteredContainer,
  ProfileContainer,
  UserImg,
  TextContainer,
  NameAndFollow,
  UserId,
  UserAbout,
  FollowContainer,
  FollowData,
  UserFollow,
  UserFollowNumber,
};
