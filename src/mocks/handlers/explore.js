// Import necessary dependencies
import { HttpResponse, http } from 'msw';

// Import constants for API configuration
import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const ExploreHandlers = [
  // 탐색탭_메인 화면
  http.get(`${baseURL}${API_URL.SEARCH_SIGNATURE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    if (search) {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: `탑색탭 메인 ${search} 불러오기 성공`,
        data: {
          hot: [
            {
              _id: 3,
              title: `${search}`,
              date: '24/01/19',
              image:
                'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              like: 5,
              user: {
                name: `${search}`,
                image:
                  'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              _id: 4,
              title: `${search} 시그니처 제목2`,
              date: '24/01/19',
              image:
                'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              like: 5,
              user: {
                name: `${search}`,
                image:
                  'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            },
          ],
          new: [
            {
              _id: 1,
              title: `${search} 시그니처 제목3`,
              date: '24/01/19',
              image:
                'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              like: 5,
              user: {
                name: `${search}`,
                image:
                  'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              _id: 2,
              title: `${search} 시그니처 제목4`,
              date: '24/01/19',
              image:
                'https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              like: 5,
              user: {
                name: `${search}`,
                image:
                  'https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            },
          ],
        },
      });
    } else {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: `탑색탭 메인 전체 불러오기 성공`,
        data: {
          hot: [
            {
              _id: 3,
              title: `전체 시그니처 제목1`,
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
              title: `전체 시그니처 제목2`,
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
              title: `전체 시그니처 제목3`,
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
              title: `전체 시그니처 제목4`,
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
    }
  }),
];
