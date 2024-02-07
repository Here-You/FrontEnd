import { axiosWithToken } from '../api';
import { API_BASE, VERSION } from '@/constants/path';

// 월별 일정 불러오기 (확정 X)
const loadMonthlySchedule = (year, month) => {
  const url = `/api/${VERSION}/${API_BASE.SCHEDULE}/monthly/${year}/${month}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 일정 불러오기 (확정 x, 무한스크롤)
const getSchedule = (journeyId, pageParam) => {
  const url = `/api/${VERSION}/${API_BASE.SCHEDULES}/${journeyId}?cursor=${pageParam}`;
  const res = axiosWithToken.get(url);

  return res;
};

// 임시
// 여정 저장하기
const saveJourney = ({ title, startDate, endDate }) => {
  const url = `/api/${VERSION}/${API_BASE.JOURNEY}/create/`;
  const res = axiosWithToken.post(url, {
    title: title,
    startDate: startDate,
    endDate: endDate,
  });
  return res;
};

// 여정 수정하기
const updateJourney = ({ journeyId, title }) => {
  const url = `/api/${VERSION}/${API_BASE.JOURNEY}/update/${journeyId}`;
  const res = axiosWithToken.put(url, {
    title: title,
  });
  return res;
};

// 여정 삭제하기
const deleteJourney = journeyId => {
  const url = `/api/${VERSION}/${API_BASE.JOURNEY}/delete/${journeyId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

// 일정 작성하기
const createSchedule = ({ scheduleId, title, latitude, longitude }) => {
  const url = `/api/${VERSION}/${API_BASE.SCHEDULE}/update-title/${scheduleId}`;
  const res = axiosWithToken.put(url, {
    title: title,
    latitude: latitude,
    longitude: longitude,
  });
  return res;
};

// 일정 삭제하기
const deleteSchedule = ({ scheduleId }) => {
  const url = `/api/${VERSION}/${API_BASE.SCHEDULE}/delete/${scheduleId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

// 세부 일정 추가하기
const addDetailSchedule = ({ scheduleId, content }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/create/${scheduleId}`;
  const res = axiosWithToken.post(url, {
    content: content,
  });
  return res;
};

// 세부 일정 작성하기 (수정하기)
const postDetailSchedule = ({ detailId, content }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/update/${detailId}`;
  const res = axiosWithToken.put(url, {
    content: content,
  });
  return res;
};

// 세부 일정 삭제하기
const deleteDetailSchedule = ({ detailId }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/delete/${detailId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

// 세부 일정 상태 변경하기
const changeDetailScheduleStatus = ({ detailId }) => {
  const url = `/api/${VERSION}/${API_BASE.DETAIL_SCHEDULE}/update-status/${detailId}`;
  const res = axiosWithToken.patch(url);
  return res;
};

// 일지 작성하기
const postDiary = ({ scheduleId, postData }) => {
  const { title, place, weather, mood, content, images } = postData;
  const url = `/api/${VERSION}/${API_BASE.DIARY}/create/${scheduleId}`;
  const res = axiosWithToken.post(url, {
    title: title,
    place: place,
    weather: weather,
    mood: mood,
    content: content,
    fileName: images,
  });
  return res;
};

// 일지 불러오기 (한개만)
const getDiary = nowPage => {
  const url = `/api/${VERSION}/${API_BASE.DIARIES}/${nowPage}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 일지 수정하기
const updateDiary = ({ diaryId, postData }) => {
  const { title, place, weather, mood, content, images } = postData;
  const url = `/api/${VERSION}/${API_BASE.DIARIES}/update/${diaryId}`;
  const res = axiosWithToken.put(url, {
    title: title,
    place: place,
    weather: weather,
    mood: mood,
    content: content,
    fileName: images,
  });
  return res;
};

export {
  loadMonthlySchedule,
  saveJourney,
  updateJourney,
  deleteJourney,
  createSchedule,
  getSchedule,
  deleteSchedule,
  addDetailSchedule,
  postDetailSchedule,
  deleteDetailSchedule,
  changeDetailScheduleStatus,
  postDiary,
  getDiary,
  updateDiary,
};
