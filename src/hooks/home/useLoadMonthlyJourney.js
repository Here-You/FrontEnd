import { useEffect, useState } from 'react';

import { loadMonthlySchedule } from '@/apis/request/home';

export const useLoadMonthlyJourney = (year, month) => {
  console.log(year, month);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await loadMonthlySchedule(year, month);
        const data = res.data.data;
        setData(data);
      } catch (e) {
        console.log(e);
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
