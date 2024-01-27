import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const mapHandlers = [
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '월별 여정 불러오기 성공',
      data: [
        {
          monthly_journey_id: 1,
          journey_list: [
            {
              journey_id: 1,
              journey_title: '서울 여행',
              diary_count: 5,
            },
            {
              journey_id: 2,
              journey_title: '부산 소풍',
              diary_count: 3,
            },
            // 추가적인 Journey 항목...
          ],
        },
      ],
    });
  }),
];
