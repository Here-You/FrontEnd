import { useEffect, useState } from 'react';

import { getSearchMate } from '@/apis/request/mate';

export const useSearchMate = searchTerm => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getSearchMate(searchTerm);
        console.log(res);
        const data = res.data.data.mates;
        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
