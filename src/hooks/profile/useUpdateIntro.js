import { useEffect, useState } from 'react';

import { updateIntro } from '@/apis/request/profile';

export const useUpdateIntro = async intro => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await updateIntro(intro);
        console.log('데이터 수정에 성공하였습니다.')
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { loading, error };
};
