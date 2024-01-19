import styled from 'styled-components';

import theme from '@/theme';

const SubWrapper = styled.div`
  width: 300px;

  span {
    color: ${theme.COLOR.MAIN.GRAY};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 21px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 140px;
  height: 228px;
`;

const FirstLine = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  padding-bottom: 7px;
`;

const UserImg = styled.img`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: transparent;
  margin-right: 5px;
`;

const UserName = styled.span`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FollowButton = styled.button`
  ${theme.ALIGN.ROW_CENTER}
  background-color: ${theme.COLOR.MAIN.GREEN};
  width: 46px;
  height: 14px;
  border-radius: 10px;
  border: transparent;
  margin-left: auto;

  span {
    width: 21px;
    height: 8.75px;
    color: ${theme.COLOR.MAIN.WHITE};
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const PreviewImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  border: 1px solid ${theme.COLOR.MAIN.LIGHT_BLACK};
`;

const StyledTitle = styled.span`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 35px;
  color: var(--black, #393939);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px 0;
`;

const StyledText = styled.span`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export {
  SubWrapper,
  MainContainer,
  FirstLine,
  UserImg,
  UserName,
  FollowButton,
  PreviewImg,
  StyledTitle,
  StyledText,
};
