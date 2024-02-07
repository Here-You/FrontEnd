import { useEffect, useState } from 'react';

import { getMateFollower } from '@/apis/request/mate';

export const useMateFollower = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMateFollower();
        const data = res.data.data.mates;
        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // }, [userId]);
  }, []);

  return { data, loading, error };
};
