import styled from 'styled-components';

import theme from '@/theme';

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const BarContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  width: 100%;
  height: 20%;
`;
const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: #d9f3e6;
`;

const StatusBar = styled.div`
  position: absolute;
  width: ${({ currentStep, totalSteps }) => (currentStep / totalSteps) * 100}%;
  height: 3px;
  background-color: ${theme.COLOR.MAIN.GREEN};
`;

const ProgressLogo = styled.img`
  position: absolute;
  top: -10px;
  left: ${({ currentStep, totalSteps }) => (currentStep / totalSteps) * 93}%;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15%;
`;
const QuestionNumber = styled.div`
  font-size: 16px;
  font-family: Pretendard-bold;
`;
const Question = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  font-family: Pretendard-bold;
  font-size: 18px;
  white-space: pre-line; //줄바꿈 인식되게
  text-align: center;
`;
const ButtonContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}

  width: 100%;
  height: 55%;
`;
const AnswerButton = styled.button`
  outline: none;
  border: none;
  font-family: Pretendard-bold;
  ${theme.ALIGN.ROW_CENTER}
  background-color: ${theme.COLOR.MAIN.GREEN};
  color: ${theme.COLOR.MAIN.WHITE};
  width: 90%;
  height: 14%;
  font-size: 16px;
  text-align: center;
  border-radius: 50px;
  white-space: pre-line; //줄바꿈 인식되게
  line-height: normal;
  margin: 3%;
`;

export {
  TestContainer,
  BarContainer,
  ProgressBar,
  StatusBar,
  ProgressLogo,
  QuestionContainer,
  QuestionNumber,
  Question,
  ButtonContainer,
  AnswerButton,
};
