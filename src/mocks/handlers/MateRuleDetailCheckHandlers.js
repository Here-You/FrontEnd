import { HttpResponse, http } from 'msw';

import mateImg from '/images/mate/mateImg.svg';
import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const MateRuleDetailCheckHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_RULE_DETAIL_CHECK}`, (req, res, ctx) => {
    const data = {
      rule_box: {
        _id: 1,
        main_title: '제주 여행 규칙을 세워보자',
        rules: [
          {
            _id: 1,
            rule_title: '1. 기상 규칙',
            rule_detail: '7시까진 무조건 기상하기. 알람은 한개만 맞춰두기',
          },
          {
            _id: 2,
            rule_title: '2. 회비 규칙',
            rule_detail: '투명하게 관리하기',
          },
        ],
      },
      participants: [
        {
          _id: '안예원',
          image: mateImg,
        },
        {
          _id: '안',
          image: mateImg,
        },
      ],
      user_image: {
        image: 'profile_image_url',
      },
      comments: [
        {
          _id: 1234,
          image: mateImg,
          comment_text: '완벽한 규칙이네요',
          created_at: 1675275543,
        },
        {
          _id: 5678,
          image: mateImg,
          comment_text: '회비 관련 규칙도 추가해주세요',
          created_at: 1675275544,
        },
      ],
      cursor: 'eyJjb25kaXRpb25JZCI6MjMsImxpbWl0IjoxMH0=',
      hasNextPage: true,
    };

    return HttpResponse.json(data);
  }),
];
