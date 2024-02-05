import { useEffect, useState } from 'react';

import { getTeamRuleList } from '@/apis/request/mate';

export const useTeamRuleList = userId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log('useTeamRuleList');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getTeamRuleList(userId);
        const data = res.data.data.rules;
        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
};
