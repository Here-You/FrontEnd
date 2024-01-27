import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const SignatureHandlers = [
  //시그니처_내 시그니처
  http.get(`${baseURL}${API_URL.GET_MY_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '내 시그니처 조회 성공',
      data: [
        {
          _id: '01',
          title: '시그니처 제목1',
          date: '24/01/19',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          _id: '02',
          title: '시그니처 제목2',
          date: '24/01/19',
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    });
  }),

  //시그니처_대표 시그니처 설정 (API명세서 미완성)
  // http.put(`${baseURL}${API_URL.SETTING_SIGNATURE}`, ({ request, params }) => {
  //   return HttpResponse.json();
  // }),

  //시그니처_이미지 업로드
  http.get(
    `${baseURL}${API_URL.UPLOAD_SIGNATURE_IMAGE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: '201',
        success: true,
        message: '이미지 업로드 url 반환 성공',
        data: {
          url: 'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          key: '1ab3423414b',
        },
      });
    },
  ),
  //시그니처_발행하기
  http.post(`${baseURL}${API_URL.PUBLISH_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      title: '새로운 시그니처 제목',
      pages: [
        {
          content: '오늘은 호수 공원을 산책했습니다 어쩌구',
          location: '광교 호수 공원',
          page: 1,
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          content: '저는 원래 호수 산책을 참 좋아하는데요 어쩌구',
          location: '동백 호수 공원',
          page: 2,
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          content: '오늘은 호수 공원을 산책했습니다 어쩌구',
          location: '광교 호수 공원',
          page: 3,
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          content: '저는 원래 호수 산책을 참 좋아하는데요 어쩌구',
          location: '동백 호수 공원',
          page: 4,
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    });
  }),
  //시그니처_시그니처 상세보기
  //내 시그니처 Response-Body X, 다른 사람의 시그니처 Response-Body 만 O
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '시그니처 조회 성공',
        data: {
          mate: {
            _id: 2,
            name: '매튜',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_like: true,
          },
          signature: {
            _id: 12321433,
            created: '23.10.02',
            title: '뽀똔이의 라이벌',
            like: 10,
            is_like: false,
            pages: [
              {
                image: 'image_url',
                location: '리라쿠마 카페, 긴자',
                content:
                  '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
                page: 1,
              },
              {
                image: 'image_url',
                location: '리라쿠마 카페, 긴자',
                content:
                  '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
                page: 2,
              },
              {
                image: 'image_url',
                location: '리라쿠마 카페, 긴자',
                content:
                  '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
                page: 3,
              },
              {
                image: 'image_url',
                location: '리라쿠마 카페, 긴자',
                content:
                  '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
                page: 4,
              },
            ],
          },
        },
      });
    },
  ),
  //시그니처_시그니처 수정하기
  http.post(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        title: '새로운 시그니처 제목',
        pages: [
          {
            content: '오늘은 호수 공원을 산책했습니다 어쩌구',
            location: '광교 호수 공원',
            page: 1,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            content: '저는 원래 호수 산책을 참 좋아하는데요 어쩌구',
            location: '동백 호수 공원',
            page: 2,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            content: '오늘은 호수 공원을 산책했습니다 어쩌구',
            location: '광교 호수 공원',
            page: 3,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            content: '저는 원래 호수 산책을 참 좋아하는데요 어쩌구',
            location: '동백 호수 공원',
            page: 4,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        ],
      });
    },
  ),
  //시그니처_시그니처 삭제하기
  http.delete(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: 204,
        success: true,
        message: '시그니처 삭제하기 성공',
      });
    },
  ),
  //시그니처_시그니처 좋아요
  http.post(`${baseURL}${API_URL.LIKE_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 201,
      success: true,
      message: '좋아요 등록 성공',
      data: {
        signatureId: 6,
        likeCount: 1,
      },
    });
  }),
  //시그니처_시그니처 좋아요 취소
  http.delete(`${baseURL}${API_URL.LIKE_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 201,
      success: true,
      message: '좋아요 취소 성공',
      data: {
        signatureId: 6,
        likeCount: 0,
      },
    });
  }),
  //시그니처_시그니처 좋아요한 사용자 목록 (API명세서 미완성)
  // http.get(`${baseURL}${API_URL.LIKE_SIGNATURE}`, ({ request, params }) => {
  //   return HttpResponse.json();
  // }),
];
