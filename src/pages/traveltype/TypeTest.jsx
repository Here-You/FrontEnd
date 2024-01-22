import { TravelTypeResultPage } from '..';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { answerA, answerB, questions } from './TestData';
import * as S from './TypeTest.style';
import spaceLogo from '/images/spacelogo.svg';

const TypeTest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 10;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    }
    if (currentStep == totalSteps) {
      navigate('/traveltype/result');
    }
  };

  return (
    <S.TestContainer>
      <S.BarContainer>
        <S.ProgressBar>
          <S.StatusBar currentStep={currentStep} totalSteps={totalSteps} />
          <S.ProgressLogo
            currentStep={currentStep}
            totalSteps={totalSteps}
            src={spaceLogo}
            alt="logo"
          />
        </S.ProgressBar>
      </S.BarContainer>
      <S.QuestionContainer>
        <S.QuestionNumber>
          {currentStep} / {totalSteps}
        </S.QuestionNumber>
        <S.Question>{questions[currentStep - 1]}</S.Question>
      </S.QuestionContainer>
      <S.ButtonContainer>
        <S.AnswerButton onClick={handleNextStep}>
          {answerA[currentStep - 1]}
        </S.AnswerButton>
        <S.AnswerButton onClick={handleNextStep}>
          {answerB[currentStep - 1]}
        </S.AnswerButton>
      </S.ButtonContainer>
    </S.TestContainer>
  );
};

export default TypeTest;
