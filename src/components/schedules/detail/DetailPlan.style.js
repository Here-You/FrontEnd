import styled from 'styled-components';

import { FONT_SIZE } from '@/constants/size';
import theme from '@/theme';

const DetailContainer = styled.div`
  display: ${props => (props.$isToggle === true ? 'flex' : 'none')};
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

const LinkLine = styled.div`
  position: relative;
  padding-left: 20px;
  margin-left: 20px;
  margin-bottom: ${props => (!props.$lastPlan ? '0' : '13px')};
  border-left: 2px dashed #21b69c;
  border-bottom: ${props => (!props.$lastPlan ? '' : '2px dashed #21b69c')};
`;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 60%;
  }
`;

const PlanTextConatiner = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1px;
`;

const MarginContainer = styled.div`
  height: 5px;
`;

const PlanText = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
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
  display: ${props => (!props.$lastPlan ? 'none' : 'block')};
  width: 10px;
  height: 10px;
  position: absolute;
  top: 90px;
  right: 15px;
  border-radius: 1000px;
  background-color: #21b69c;
`;

const AddDetailPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
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

const Image = styled.img`
  cursor: pointer;
  width: 18px;
  align-self: flex-start;
`;

const CheckImg = styled(Image)`
  width: 16px;
  margin-left: 1px;
`;

const Input = styled.textarea`
  display: flex;
  flex: 1;
  height: 25px;

  border: 0px;
  background-color: transparent;
  outline: none;
  resize: none;

  ::placeholder {
    color: ${theme.COLOR.MAIN.LIGHT_GRAY};
  }
`;

const SaveButton = styled.button`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 5px;
  margin-left: auto;

  border: 0;
  border-radius: 10px;
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  font-size: ${FONT_SIZE.XS};
  cursor: pointer;
`;

export {
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
  Image,
  CheckImg,
  Input,
  SaveButton,
};
