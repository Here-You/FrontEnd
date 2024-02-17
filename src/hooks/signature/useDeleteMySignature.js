import { useEffect, useState } from 'react';

import { deleteMySignature } from '@/apis/request/signature';

// 시그니처 삭제하기
export const useDeleteMySignature = signatureId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await deleteMySignature(signatureId);
        const data = res.data.data;
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
