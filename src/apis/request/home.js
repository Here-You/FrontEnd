import { axios, axiosWithToken } from '../api';
import { API_BASE, API_URL, VERSION } from '@/constants/path';

const loadMonthlySchedule = (year, month) => {
  const url = `${API_URL.LOAD_MONTHLY_SCHEDULE}?year=${year}&month=${month}`;
  // axiosWithToken으로 향후에 변경
  const res = axios.get(url);
  return res;
};

const saveJourney = ({ title, dates }) => {
  const url = `${API_URL.SAVE_JOURNEY}`;
  const res = axiosWithToken.get(url, {
    title: title,
    dates: dates,
  });
  return res;
};

const updateJourney = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.JOURNEY}/update/${journeyId}`;
  const res = axiosWithToken.put(url, {
    title: title,
    dates: dates,
  });
  return res;
};

const deleteJourney = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.JOURNEY}/delete/${journeyId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

const createSchedule = ({ journeyId }) => {
  const url = `${API_URL.CREATE_SCHEDULE}`;
  const res = axiosWithToken.post(url, {
    journeyId: journeyId,
  });
  return res;
};

const getSchedule = ({ journeyId }) => {
  const url = `/api/${VERSION}/${API_BASE.SCHEDULES}/${journeyId}`;
  const res = axiosWithToken.get(url);
  return res;
};

const postDetailSchedule = ({ scheduleId, content }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/${scheduleId}`;
  const res = axiosWithToken.post(url, {
    content: content,
  });
  return res;
};

const updateDetailSchedule = ({ scheduleId, detailId }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/${scheduleId}/update/${detailId}`;
  const res = axiosWithToken.put(url);
};

const deleteDetailSchedule = ({ scheduleId, detailId }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/${scheduleId}/delete/${detailId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

const postDiary = ({ scheduleId, postData }) => {
  const { title, place, weather, mood, content, userId, images } = postData;
  const url = `/api/${VERSION}/${API_BASE.DIARY}/create/${scheduleId}`;
  const res = axiosWithToken.post(url, {
    title: title,
    place: place,
    weather: weather,
    mood: mood,
    content: content,
    userId: userId,
    images: images,
  });
  return res;
};

const getDiary = ({ scheduleId }) => {
  const url = `/api/${VERSION}/${API_BASE.DIARIES}/${scheduleId}`;
  const res = axiosWithToken.get(url);
  return res;
};

export {
  loadMonthlySchedule,
  saveJourney,
  updateJourney,
  deleteJourney,
  createSchedule,
  getSchedule,
  postDetailSchedule,
  updateDetailSchedule,
  deleteDetailSchedule,
  postDiary,
  getDiary,
};
