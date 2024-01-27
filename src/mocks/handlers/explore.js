// Import necessary dependencies
import { HttpResponse, http } from 'msw';

// Import constants for API configuration
import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const ExploreHandlers = [
  // 탐색탭_메인 화면
  http.get(`${baseURL}${API_URL.SEARCH_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '탑색탭 메인 불러오기 성공',
      data: {
        hot: [
          {
            _id: 3,
            title: '시그니처 제목3',
            date: '24/01/19',
            image:
              'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            like: 5,
            user: {
              name: '닉네임',
              image:
                'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            _id: 4,
            title: '시그니처 제목4',
            date: '24/01/19',
            image:
              'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            like: 5,
            user: {
              name: '닉네임',
              image:
                'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
        ],
        new: [
          {
            _id: 1,
            title: '시그니처 제목1',
            date: '24/01/19',
            image:
              'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            like: 5,
            user: {
              name: '닉네임',
              image:
                'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            _id: 2,
            title: '시그니처 제목2',
            date: '24/01/19',
            image:
              'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            like: 5,
            user: {
              name: '닉네임',
              image:
                'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          },
        ],
      },
    });
  }),
  // 탐색탭_키워드 검색 (쿼리 파라미터 필요)
  http.get(`${baseURL}${API_URL.SEARCH_SIGNATURE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get('keyword');
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '시그니처 검색하기 성공',
      data: [
        {
          _id: 1,
          title: '강릉카페투어',
          date: '24/01/19',
          image:
            'https://plus.unsplash.com/premium_photo-1666787742869-54bd5c564d47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          like: 10,
          user: {
            name: '닉네임',
            image:
              'https://plus.unsplash.com/premium_photo-1666787742869-54bd5c564d47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        },
        {
          _id: 2,
          title: '강릉횟집추천',
          date: '24/01/30',
          image:
            'https://plus.unsplash.com/premium_photo-1666787742869-54bd5c564d47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          like: 10,
          user: {
            name: '닉네임',
            image:
              'https://plus.unsplash.com/premium_photo-1666787742869-54bd5c564d47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        },
      ],
    });
  }),
];
