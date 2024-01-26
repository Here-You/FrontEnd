import styled from 'styled-components';

import theme from '@/theme';

const TeamContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-around;
  position: relative;
  width: 327px;
  height: 62px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fdfdfd;
  margin-bottom: 10px;
  cursor: pointer;
`;

const TeamInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: absolute;
  left: 15px;
  height: 35px;
  gap: 10px;
`;

const ImgContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 26px;
`;

const TeammateImg = styled.img`
  position: absolute;
  left: ${props => props.index * 8}px;
  width: 14px;
  height: 14px;
  border-radius: 14px;
`;

const OverImg = styled.img`
  position: absolute;
  left: 25px;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${theme.COLOR.MAIN.WHITE};
`;

const TeammateNum = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamTitle = styled.span`
  position: absolute;
  left: 70px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
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
  ImgContainer,
  TeammateImg,
  OverImg,
  TeammateNum,
  TeamTitle,
  ExitContainer,
  ExitButton,
  WriteDate,
};
