import { HttpResponse, http } from 'msw';

import mateImg from '/images/mate/mateImg.svg';
import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const MateInviteHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_RULE_INVITE}`, (req, res, ctx) => {
    const mates = [
      {
        _id: 1,
        name: '안예원1',
        nickname: 'ahnyewon1',
        bio: '안녕하세요 안예원 입니다. 반가워요',
        image: mateImg,
      },
      {
        _id: 2,
        name: '안예원2',
        nickname: 'ahnyewon2',
        bio: '안녕하세요 안예원 입니다. 반가워요',
        image: mateImg,
      },
      {
        _id: 3,
        name: '안예3',
        nickname: 'ahnyewon3',
        bio: '안녕하세요 안예원 입니다. 반가워요',
        image: mateImg,
      },
    ];

    return HttpResponse.json(mates);
  }),
];
