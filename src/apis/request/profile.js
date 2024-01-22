import { axios, axiosWithToken } from '../api';
import { API_PATH } from '@/constants/path';


const getProfileInfo = () => {
  return axios.get(API_PATH.MY_PAGE_INFO);
};



export { getProfileInfo };
