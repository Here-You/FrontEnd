import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateSearchHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_SEARCH}`, (req, res, ctx) => {
    const mates = [
      {
        _id: '1',
        name: '샐리',
        nickname: '@sally',
        bio: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower_num: '23',
        following_num: '32',
        image: '/images/userImg.png',
      },
      {
        _id: '2',
        name: '샐리',
        nickname: '@sally',
        bio: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower_num: '23',
        following_num: '32',
        image: '/images/userImg.png',
      },
      {
        _id: '3',
        name: '샐리3',
        nickname: '@sally3',
        bio: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower_num: '23',
        following_num: '32',
        image: '/images/userImg.png',
      },
      {
        _id: '4',
        name: '샐리4',
        nickname: '@sally4',
        bio: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower_num: '23',
        following_num: '32',
        image: '/images/userImg.png',
      },
    ];

    return HttpResponse.json(mates);
  }),
];
