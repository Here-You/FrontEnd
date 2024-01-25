import styled from 'styled-components';

import theme from '@/theme';

const TeamContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  width: 327px;
  height: 62px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fdfdfd;
  position: relative;
  margin-bottom: 10px;
`;

const TeamInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 5px;
  position: absolute;
  left: 15px;
`;

const TeamInfo = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 5px;
`;

const TeammateImg = styled.img`
  width: 12.828px;
  height: 13.977px;
  border-radius: 13.977px;
`;

const TeammateNum = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TeammateName = styled.span`
  color: ${theme.COLOR.MAIN.BLACK};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamTitle = styled.span`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
`;

const ExitContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  right: 15px;
`;

const ExitButton = styled.button`
  color: #d80000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: transparent;
  margin-bottom: 3px;
`;

const WriteDate = styled.span`
  width: 48px;
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export {
  TeamContainer,
  TeamInfoContainer,
  TeamInfo,
  TeammateImg,
  TeammateNum,
  TeammateName,
  TeamTitle,
  ExitContainer,
  ExitButton,
  WriteDate,
};
