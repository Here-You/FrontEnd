import { useEffect, useState } from 'react';

import { getSearchExploreKeyword } from '@/apis/request/search';

export const useSearchExploreKeyword = keyword => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getSearchExploreKeyword(keyword);
        const data = res.data.data;

        setData(data);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return { data, loading, error };
};
