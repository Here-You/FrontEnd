import { axiosWithToken } from '../api';
import { API_BASE, API_URL, VERSION } from '@/constants/path';

// 토큰이 필요 없는 경우 axios를 사용하면 됩니다.
const getMonthlyJourney = (year, month) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/get-monthly-journey/${year}/${month}`;
  const res = axiosWithToken.get(url);
  return res;
};

const getJourneyMap = journeyId => {
  const url = `${API_URL.GET_JOURNEY_MAP}/${journeyId}`;
  const res = axiosWithToken.get(url);

  return res;
};

const getDiaryMap = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/diaries/get/${journeyId}`;
  const res = axiosWithToken.get(url);
  return res;
};

const getDetailJourneyMap = journeyId => {
  const url = `/api/${VERSION}/${API_BASE.MAP}/schedules/get/${journeyId}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 토큰이 필요한 경우 axiosWithToken을 사용하면 됩니다.

export { getMonthlyJourney, getJourneyMap, getDiaryMap, getDetailJourneyMap };
