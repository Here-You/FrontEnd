import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateManagementHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_MANAGEMENT}`, (req, res, ctx) => {
    const mates = [
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally2',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '오브',
        userId: '@orb',
        about: '가나다라마바사아자',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally3',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
      },
    ];

    return HttpResponse.json(mates);
  }),
];
