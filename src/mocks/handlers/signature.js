import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const SignatureHandlers = [
  //시그니처_내 시그니처
  http.get(`${baseURL}${API_URL.GET_MY_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      timestamp: '2024-02-03T08:18:18.076Z',
      code: 'OK',
      success: true,
      message: '내 시그니처 가져오기 성공',
      data: [
        {
          _id: 1,
          title: '호주와 겨룬 8강전 직관 후기',
          date: '2024-02-03T08:03:22.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: 2,
          title: '강남역 근처 카페 모음',
          date: '2024-02-03T08:14:40.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: 3,
          title: '호주와 겨룬 8강전 직관 후기',
          date: '2024-02-03T08:03:22.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: 4,
          title: '강남역 근처 카페 모음',
          date: '2024-02-03T08:14:40.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: 5,
          title: '호주와 겨룬 8강전 직관 후기',
          date: '2024-02-03T08:03:22.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: 6,
          title: '강남역 근처 카페 모음',
          date: '2024-02-03T08:14:40.000Z',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    });
  }),

  //시그니처_발행하기
  http.post(`${baseURL}${API_URL.PUBLISH_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      timestamp: '2024-02-03T08:14:40.451Z',
      code: 'CREATED',
      success: true,
      message: '시그니처 기록하기 성공',
      data: 2,
    });
  }),

  //시그니처_시그니처 상세보기
  //내 시그니처 Response-Body X, 다른 사람의 시그니처 Response-Body 만 O
  //내가 작성한 거 추가해야함
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      const signatureId = params.signatureId;
      if (!signatureId) {
        return new HttpResponse(null, { status: 404 });
      }
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '시그니처 조회 성공',
        data: {
          author: {
            _id: 2,
            name: '매튜',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_followed: false,
          },
          header: {
            _id: 12321433,
            date: '23.10.02',
            title: '뽀똔이의 라이벌',
            like_cnt: 10,
            is_liked: false,
          },
          pages: [
            {
              _id: 1,
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              location: '리라쿠마 카페, 긴자',
              content: '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
              page: 1,
            },
            {
              _id: 2,
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              location: '서울, 강동',
              content: '강동강동강동강동강동강동',
              page: 2,
            },
            {
              _id: 3,
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              location: '경기도, 안산',
              content: '안산시안산시안산시안산시',
              page: 3,
            },
            {
              _id: 4,
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              location: '서울, 강남',
              content:
                '강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남강남',
              page: 4,
            },
          ],
        },
      });
    },
  ),

  //시그니처_시그니처 수정하기
  http.patch(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-05T07:37:55.770Z',
        code: 'OK',
        success: true,
        message: '시그니처 수정하기 성공',
        data: '6',
      });
    },
  ),

  //시그니처_시그니처 삭제하기
  http.delete(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-05T07:40:21.691Z',
        code: 'OK',
        success: true,
        message: '시그니처 삭제 성공',
        data: null,
      });
    },
  ),

  //시그니처_시그니처 좋아요, 좋아요 취소
  http.patch(`${baseURL}${API_URL.LIKE_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      timestamp: '2024-02-03T07:07:13.749Z',
      code: 'CREATED',
      success: true,
      message: '시그니처 좋아요 성공',
      data: {
        liked: 3,
        signatureId: 15,
      },
    });
  }),

  //시그니처_시그니처 좋아요한 사용자 목록
  http.get(`${baseURL}${API_URL.LIKELIST_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      timestamp: '2024-02-05T15:03:14.672Z',
      code: 'OK',
      success: true,
      message: '시그니처 좋아요 목록 불러오기 성공',
      data: {
        liked: 3,
        profiles: [
          {
            _id: 1,
            image: 'imagekey1',
            introduction: '사용자 소개',
            nickname: '완두콩',
            is_followed: null,
          },
          {
            _id: 2,
            image: 'imagekey2',
            introduction: '사용자 소개',
            nickname: '강낭콩',
            is_followed: false,
          },
          {
            _id: 3,
            image: 'imagekey3',
            introduction: '사용자 소개',
            nickname: '검은콩',
            is_followed: false,
          },
        ],
      },
    });
  }),
];
