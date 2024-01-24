import styled from 'styled-components';

import theme from '@/theme';

const MainContainer = styled.div`
  width: 190px;
  height: 175px;
  border: 1px solid rgba(130, 130, 130, 0.3);
  border-radius: 20px;
  padding: 15px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  ${theme.ALIGN.ROW_CENTER};
  justify-content: stretch;
  margin-bottom: 14px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  ${theme.ALIGN.COLUMN_CENTER};
  align-items: start;
  padding-left: 8px;
`;

const RowContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-between;

  span {
    width: 60px;
    color: var(--black, #333);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-right: 5px;
  }
`;

const UserBio = styled.span`
  color: var(--black, #333);
  font-size: 8.864px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.638px;
`;

const SignatureContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 5px;
`;

const SignatureContent = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 70px;

  img {
    width: 100%;
    height: 70px;
    border-radius: 2.5px;
    border: 0.5px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
  }

  span {
    width: 100%;
    color: ${theme.COLOR.MAIN.BLACK};
    font-size: 7px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 2.5px;
    padding-left: 1px;
    padding-right: 1px;
  }
`;

export {
  MainContainer,
  ProfileContainer,
  RowContainer,
  ColumnContainer,
  UserBio,
  SignatureContainer,
  SignatureContent,
};
