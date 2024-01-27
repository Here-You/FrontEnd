import { useEffect, useState } from 'react';

import * as S from './MateRuleDetailCheck.style';
import { getRuleDetailCheck } from '@/apis/request/mate';
import RuleBox from '@/components/mate/RuleBox';
import RuleButton from '@/components/mate/RuleButton';

const MateRuleDetailCheckPage = () => {
  const [ruleData, setRuleData] = useState([]);

  useEffect(() => {
    const fetchRuleData = async () => {
      try {
        const response = await getRuleDetailCheck();
        setRuleData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
      }
    };
    fetchRuleData();
  }, []);

  const handleEditClick = () => {};

  return (
    <S.CenteredContainer>
      <RuleBox />
      <S.ButtonWrapper>
        <RuleButton
          text="수정하기"
          onClick={handleEditClick}
          ruleData={ruleData}
        />
      </S.ButtonWrapper>
    </S.CenteredContainer>
  );
};

export default MateRuleDetailCheckPage;
