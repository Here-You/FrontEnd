import { axios } from '../api';
import { API_BASE, VERSION } from '@/constants/path';

// 토큰이 필요 없는 경우 axios를 사용하면 됩니다.
const getMonthlyJourney = (year, month) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/monthly-journey?year=${year}&month=${month}`;
  const res = axios.get(url);
  return res;
};

const getJourneyMap = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/journey/get/${journeyId}`;
  const res = axios.get(url);
  return res;
};

const getDiaryMap = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/diaries/get/${journeyId}`;
  const res = axios.get(url);
  return res;
};

const getDetailJourneyMap = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/schedules/get/${journeyId}`;
  const res = axios.get(url);
  return res;
};

// 토큰이 필요한 경우 axiosWithToken을 사용하면 됩니다.

export { getMonthlyJourney, getJourneyMap, getDiaryMap, getDetailJourneyMap };
