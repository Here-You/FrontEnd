import { useEffect, useState } from 'react';

import { getExploreMate } from '@/apis/request/mate';

export const useExploreMate = userId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getExploreMate(userId);
        console.log(res);
        const data = res.data.data.recommend_mates;
        console.log(data);
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
