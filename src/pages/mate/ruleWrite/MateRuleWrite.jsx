import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  console.log(selectedProfiles);

  const handlePublishClick = async () => {
    try {
      setLoading(true);
      const postData = {
        mainTitle: mainTitle,
        created: new Date(),
        rules: rules,
        invitedId: selectedProfiles?.map(profile => profile?._id),
      };
      const res = await postCreateMateRule(postData);
      navigate(`/mate/rule-check/${res.data._id}`);
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
