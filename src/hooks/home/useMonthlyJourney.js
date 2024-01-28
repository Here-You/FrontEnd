import { useEffect, useState } from 'react';

import { getMonthlyJourney } from '@/apis/request/map';

export const useMonthlyJourney = (year, month) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMonthlyJourney(year, month);
        const data = res.data.data;

        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year, month]);

  return { data, loading, error };
};
