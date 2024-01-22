import styled from 'styled-components';

const LinkLine = styled.div`
  position: relative;
  width: 30px;
  margin-bottom: ${props =>
    props.$dataLength > 1 && !props.$lastPlan ? '0' : '13px'};
  border-left: 2px dashed #21b69c;
  border-bottom: ${props =>
    props.$dataLength > 1 && !props.$lastPlan ? '' : '2px dashed #21b69c'};
`;

const DetailContainer = styled.div`
  display: ${props => (props.$isToggle === true ? 'flex' : 'none')};
  flex-direction: row;
  margin-left: 60px;
  width: 400px;
  /* background-color: pink; */
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
  margin-left: 1px;
`;

const MarginContainer = styled.div`
  height: 5px;
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
  display: ${props =>
    props.$dataLength > 1 && !props.$lastPlan ? 'none' : 'block'};
  width: 10px;
  height: 10px;
  position: absolute;
  top: 88px;
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

const CursorPointer = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 20px;
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
  CursorPointer,
  Image,
};
