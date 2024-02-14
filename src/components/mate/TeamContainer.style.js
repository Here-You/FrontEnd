import styled from 'styled-components';

import theme from '@/theme';

const TeamContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  justify-content: space-evenly;
  padding: 0 20px;
  width: 450px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fdfdfd;
  margin-bottom: 15px;
  cursor: pointer;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 327px;
    height: 62px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;

const TeamInfoContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 45px;
  width: auto;
  gap: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 35px;
  }
`;

const ImgContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  position: relative;
  width: 36px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 26px;
  }
`;

const TeammateImg = styled.img`
  position: absolute;
  left: ${props => props.index * 12}px;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    left: ${props => props.index * 8}px;
    width: 14px;
    height: 14px;
    border-radius: 14px;
  }
`;

const OverImg = styled.img`
  position: absolute;
  left: 30px;
  width: 20px;
  background-color: ${theme.COLOR.MAIN.WHITE};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 14px;
  }
`;

const TeammateNum = styled.span`
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
`;

const TeamTitle = styled.span`
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 180px;
    font-size: 16px;
  }
`;

const ExitContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: auto;
`;

const ExitButton = styled.button`
  width: 100%;
  color: #d80000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: transparent;
  margin-bottom: 6px;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

const WriteDate = styled.span`
  width: 100%;
  color: ${theme.COLOR.MAIN.GRAY};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 12px;
  }
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
