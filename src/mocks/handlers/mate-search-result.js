import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateSearchHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_SEARCH}`, (req, res, ctx) => {
    // const userId = req.url.searchParams.get('userid');

    const mates = [
      {
        imgSrc: 'src/assets/images/userImg.png',
        nickname: '샐리',
        userid: '@sally',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower: '23',
        following: '32',
      },
      {
        imgSrc: 'src/assets/images/userImg.png',
        nickname: '샐리',
        userid: '@sally2',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower: '23',
        following: '32',
      },
      {
        imgSrc: 'src/assets/images/userImg.png',
        nickname: '샐리',
        userid: '@sally3',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower: '23',
        following: '32',
      },
      {
        imgSrc: 'src/assets/images/userImg.png',
        nickname: '샐리',
        userid: '@sally3',
        about: '특기는 독서, 취미는 여행 ✈️ 제주살이 2달차 귤린이',
        follower: '23',
        following: '32',
      },
      // ].filter(mate => mate.userid === userId);
    ];

    return HttpResponse.json(mates);
  }),
];
