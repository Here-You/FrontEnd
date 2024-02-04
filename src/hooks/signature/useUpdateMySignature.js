import { useEffect, useState } from 'react';

import { updateMySignature } from '@/apis/request/signature';

//시그니처 수정하기
export const useUpdateMySignature = (signatureId, { patchData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await updateMySignature(signatureId, { patchData });
        const data = res.data.data;
        console.log(res);
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
s;
