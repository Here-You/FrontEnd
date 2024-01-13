import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateLookHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_LOOK}`, (req, res, ctx) => {
    const mates = [
      // {
      //   imgSrc: 'src/assets/images/userImg.png',
      //   nickname: '샐리',
      //   userid: '@sally',
      //   about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
      //   follower: '23',
      //   following: '32',
      // },
    ];

    return HttpResponse.json(mates);
  }),
];
