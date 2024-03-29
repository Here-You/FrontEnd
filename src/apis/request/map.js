import { axiosWithToken } from '../api';
import { API_BASE, API_URL, VERSION } from '@/constants/path';

// 토큰이 필요 없는 경우 axios를 사용하면 됩니다.
// 월별 여정 불러오기
const getMonthlyJourney = (year, month) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/get-monthly-journey/${year}/${month}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 여정 불러오기 (지도)
const getJourneyMap = journeyId => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/get-journey/${journeyId}`;
  const res = axiosWithToken.get(url);

  return res;
};

// 일지 불러오기 (지도)
const getDiaryMap = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/get-diaries/${journeyId}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 세부 여정 확인하기 (지도)
const getDetailJourneyMap = journeyId => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/get-schedules/${journeyId}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 토큰이 필요한 경우 axiosWithToken을 사용하면 됩니다.

export { getMonthlyJourney, getJourneyMap, getDiaryMap, getDetailJourneyMap };
