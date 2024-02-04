import styled from 'styled-components';

import theme from '@/theme';

const CenteredContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  margin-top: 20px;
`;

const ProfileContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-evenly;
  width: 450px;
  height: 100px;
  padding-left: 20px;
  position: relative;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 300px;
    height: 85px;
  }
`;

const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 45px;
  border: none;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 45px;
    height: 45px;
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: flex-start;
  width: 240px;
  height: 100%;
  gap: 6px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 140px;
    gap: 3px;
  }
`;

const UserName = styled.span`
  color: var(--black, #333);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const UserNickName = styled.span`
  color: #aaa;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const UserBio = styled.div`
  color: var(--black, #333);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.864px;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

export {
  CenteredContainer,
  ProfileContainer,
  UserImg,
  TextContainer,
  UserName,
  UserNickName,
  UserBio,
};
