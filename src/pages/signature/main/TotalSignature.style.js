import styled from 'styled-components';

import theme from '@/theme';

const PageContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width:90%;
  margin: 0 auto;
  margin-top: 20px;
`;
const LocationContainer = styled.div`
  display: flex;
  margin: 5%;
`;

const Title = styled.div`
  font-family: 'Pretendard-bold';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.div`
  font-family: 'Pretendard-bold';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 80%;
`;

const PageIndicator = styled.div`
  display: flex;
  margin: 5%;
`;

const PageDot = styled.div`
  margin: 3px;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: rgba(130, 130, 130, 0.5);
  background-color: ${props =>
    props.selected ? theme.COLOR.MAIN.BLACK : theme.COLOR.MAIN.GRAY};
`;

const NavigationButtons = styled.div`
  display: flex;
`;

const Blank = styled.div`
  width: 24px;
`;
const Content = styled.div`
  text-align: center;
  width: 90%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export {
  PageContainer,
  LocationContainer,
  Title,
  Text,
  ImgContainer,
  Img,
  PageIndicator,
  PageDot,
  NavigationButtons,
  Blank,
  Content,
};
