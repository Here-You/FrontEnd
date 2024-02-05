import { useEffect, useState } from 'react';

import { getTeamMateRule } from '@/apis/request/mate';

export const useTeamMateRule = ruleId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getTeamMateRule(ruleId);
        const data = res.data.data;
        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ruleId]);

  return { data, loading, error };
};
