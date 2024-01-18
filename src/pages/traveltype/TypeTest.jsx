import React, { useState } from 'react';

import { answerA, answerB, questions } from './TestData';
import * as S from './TypeTest.style';
import spacelogo from '/images/spacelogo.svg';

const TypeTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
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
            src={spacelogo}
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
        <S.AnswerButton
          onClick={handleNextStep}
          disabled={currentStep === totalSteps}>
          {answerA[currentStep - 1]}
        </S.AnswerButton>
        <S.AnswerButton
          onClick={handleNextStep}
          disabled={currentStep === totalSteps}>
          {answerB[currentStep - 1]}
        </S.AnswerButton>
      </S.ButtonContainer>
    </S.TestContainer>
  );
};

export default TypeTest;
