import { HttpResponse, http } from 'msw';

import mateImg from '/images/mate/mateImg.svg';
import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const MateRuleListHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_RULE_CHECK}`, (req, res, ctx) => {
    const mates = [
      {
        _id: 1,
        participant_cnt: 3,
        title: '제주도 여행을 위한 규칙',
        last_updated_date: '23.10.10',
        participants: [
          {
            _id: 345,
            image: mateImg,
          },
          {
            _id: 678,
            image: mateImg,
          },
        ],
      },
      {
        _id: 2,
        participant_cnt: 4,
        title: '제주도 여행을 위한 규칙',
        last_updated_date: '23.10.10',
        participants: [
          {
            _id: 345,
            image: mateImg,
          },
          {
            _id: 678,
            image: mateImg,
          },
          {
            _id: 678,
            image: mateImg,
          },
        ],
      },
    ];

    return HttpResponse.json(mates);
  }),
];
