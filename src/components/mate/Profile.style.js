import styled from 'styled-components';

import theme from '@/theme';

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-evenly;
  width: 400px;
  height: 170px;
  border-radius: 10px;
  background: ${theme.COLOR.MAIN.WHITE};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 130px;
    margin-bottom: 30px;
  }
`;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 78px;
  object-fit: cover;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 78px;
    height: 78px;
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 200px;
  gap: 12px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 140px;
    gap: 6px;
  }
`;

const NameAndFollow = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const UserId = styled.span`
  color: #aaa;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
  }
`;

const UserAbout = styled.span`
  color: var(--black, #333);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
  }
`;

const FollowContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
`;

const FollowSection = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: flex-start;
  gap: 10px;
  width: 50%;
`;

const UserFollow = styled.span`
  color: #aaa;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 45px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
    width: 30px;
  }
`;

const UserFollowNumber = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
  }
`;

export {
  ProfileContainer,
  UserImg,
  TextContainer,
  NameAndFollow,
  UserId,
  UserAbout,
  FollowContainer,
  FollowSection,
  UserFollow,
  UserFollowNumber,
};
