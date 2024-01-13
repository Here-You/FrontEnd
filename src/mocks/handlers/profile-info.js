import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const profileInfoHandlers = [
  http.get(`${baseURL}${API_PATH.MY_PAGE_INFO}`, (req, res, ctx) => {
    const profile = {
      nickname: '닉네임',
      type: '🐯',
      email: 'abcde@naver.com',
      introduction: '특기는 여행, 취미는 기록: >',
      follower: '팔로워',
      following: '팔로잉',
    };
    return HttpResponse.json(profile);
  }),
];
