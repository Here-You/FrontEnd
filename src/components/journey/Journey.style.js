import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 450px;
  position: relative;
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 125px;
  border: 3px solid #21b69c;
  border-radius: 13px;
  padding: 20px 15px;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 340px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: black;
  font-size: 25px;
  font-weight: 700;
`;

const Date = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
  color: black;
  font-size: 14px;
  font-weight: 400;
`;

const Mate = styled.div`
  display: flex;
  gap: 5px;
  color: black;
  font-size: 14px;
  font-weight: 400;
`;

const AddDailyPost = styled.p`
  display: flex;
  margin-left: auto;
  color: black;
  font-size: 14px;
  font-weight: 400;
`;

const LinkLine = styled.div`
  position: relative;
  width: 30px;
  margin-bottom: 13px;
  border-left: 2px dashed #21b69c;
  border-bottom: 2px dashed #21b69c;
`;

const DetailContainer = styled.div`
  display: ${props => (props.onToggle ? 'flex' : 'none')};
  flex-direction: row;
  margin-left: 60px;
  width: 400px;
`;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PlanTextConatiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  gap: 10px;
`;

const MarginContainer = styled.div`
  height: 15px;
`;

const PlanText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  p {
    color: black;
    font-size: 14px;
    font-weight: 400;
  }
`;

const PlanMenu = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 5px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 96px;
  right: 23px;
  border-radius: 1000px;
  background-color: #21b69c;
`;

const AddDetailPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const AddDetailPlanText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  p {
    color: #21b69c;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 55px;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #21b69c;
  }
`;

const ShortLine = styled.div`
  display: ${props => (props.$isToggle === true ? 'none' : 'block')};
  position: relative;
  height: 20px;
  margin-left: 20px;
  border-left: 2px dashed #21b69c;
`;

const CursorPointer = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 20px;
`;

const DailyRecordText = styled(Link)`
  margin-left: auto;
  color: ${theme.COLOR.MAIN.GRAY};
  font-size: ${FONT_SIZE.SM};
  cursor: pointer;
`;

export {
  Container,
  MainContainer,
  RowContainer,
  Title,
  Date,
  Mate,
  AddDailyPost,
  DetailContainer,
  PlanContainer,
  PlanTextConatiner,
  PlanText,
  PlanMenu,
  AddDetailPlanContainer,
  AddDetailPlanText,
  LinkLine,
  MarginContainer,
  Circle,
  ScrollContainer,
  CursorPointer,
  ShortLine,
  Image,
  DailyRecordText,
};
