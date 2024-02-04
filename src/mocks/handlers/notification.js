import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const notificationHandlers = [
  http.get(`${baseURL}${API_URL.NOTIFICATION}`, () => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '알림 조회 성공',
      data: [
        {
          id: 1,
          type: 'LIKE',
          content: '상추부자, 이녕12님 외 10명이 내 시그니처에 좋아요',
        },
        {
          id: 2,
          type: 'COMMENT',
          content: '상추부자, 이녕12님 외 10명이 내 시그니처에 좋아요',
        },
        {
            id: 3,
            type: 'INVITE',
            content: '상추부자, 이녕12님 외 10명이 내 시그니처에 좋아요',
          },
      ],
    });
  }),
];

