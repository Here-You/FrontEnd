import { useState } from 'react';

import MateContainer from '../MateContainer';
import * as S from './MateRuleWrite.style';
import { postCreateMateRule } from '@/apis/request/mate';
import RuleBox from '@/components/mate/RuleBox';

const MateRuleWritePage = () => {
  const [mainTitle, setMainTitle] = useState('');
  const [rules, setRules] = useState([{ ruleTitle: '', ruleDetail: '' }]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePublishClick = async () => {
    console.log('handlePublishClick called');
    try {
      setLoading(true);
      const postData = {
        mainTitle: mainTitle,
        created: new Date(),
        rules: rules,
        invitedId: selectedProfiles.map(profile => profile.id),
      };
      const res = await postCreateMateRule(userId, postData);
      console.log(res);
    } catch (e) {
      setError(e.message || '에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MateContainer>
      <RuleBox
        mainTitle={mainTitle}
        setMainTitle={setMainTitle}
        rules={rules}
        setRules={setRules}
        selectedProfiles={selectedProfiles}
        setSelectedProfiles={setSelectedProfiles}
      />
      <S.PublishButton onClick={handlePublishClick}>발행하기</S.PublishButton>
    </MateContainer>
  );
};

export default MateRuleWritePage;
