import { useEffect, useState } from 'react';

import { getDetail } from '@/apis/request/signature';
import { DateContainer } from '@/pages/dailyRecord/edit/DailyRecordEdit.style';

// 시그니처 상세보기
export const useGetDetail = signatureId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDetail(signatureId);
        const data = res.data.data;
        const header = data.header;
        setData(data);
        setLike(header.is_liked);
        setCount(header.like_cnt);
      } catch (e) {
        setError(e.message || '에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [signatureId, setLike, setCount]);

  return { data, loading, error, like, count, setLike, setCount };
};
