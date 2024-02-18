// Import necessary dependencies
import { HttpResponse, http } from 'msw';

// Import constants for API configuration
import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const ExploreHandlers = [
  // 탐색탭_핫 시그니처
  http.get(
    `${baseURL}${API_URL.SEARCH_SIGNATURE}/hot`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-05T20:12:21.562Z',
        code: 'OK',
        success: true,
        message: '탐색탭 메인 화면 가져오기 성공',
        data: {
          covers: [
            {
              _id: 5,
              title: '강남역 근처 카페 모음',
              liked: 0,
              userName: '써니',
              date: '2024.02.06',
              image: null,
              userImage: 'imagekey1',
            },
            {
              _id: 5,
              title: '강남역 근처 카페 모음',
              liked: 0,
              userName: '써니',
              date: '2024.02.06',
              image: null,
              userImage: 'imagekey1',
            },
          ],
        },
      });
    },
  ),
  // 탐색탭_최신 시그니처
  http.get(
    `${baseURL}${API_URL.SEARCH_SIGNATURE}/new`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-05T20:12:21.562Z',
        code: 'OK',
        success: true,
        message: '탐색탭 메인 화면 가져오기 성공',
        data: {
          covers: [
            {
              _id: 5,
              title: '강남역 근처 카페 모음',
              liked: 0,
              userName: '써니',
              date: '2024.02.06',
              image: null,
              userImage: 'imagekey1',
            },
            {
              _id: 5,
              title: '강남역 근처 카페 모음',
              liked: 0,
              userName: '써니',
              date: '2024.02.06',
              image: null,
              userImage: 'imagekey1',
            },
          ],
        },
      });
    },
  ),
];
