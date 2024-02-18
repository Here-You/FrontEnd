import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const SignatureHandlers = [
  //시그니처_내 시그니처
  http.get(`${baseURL}${API_URL.GET_MY_SIGNATURE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      code: 'OK',
      success: true,
      message: '내 시그니처 가져오기 성공',
      data: [
        {
          id: 1,
          title: '호주와 겨룬 8강전 직관 후기',
          date: '2024-02-03T08:03:22.000Z',
          image: null,
        },
        {
          id: 2,
          title: '강남역 근처 카페 모음',
          date: '2024-02-03T08:14:40.000Z',
          image: null,
        },
      ],
    });
  }),

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
  //내가 작성한 거 추가해야함
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '시그니처 상세보기 성공: 내 시그니처',
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
              image: 'image_url',
              location: '리라쿠마 카페, 긴자',
              content: '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
              page: 1,
            },
            {
              image: 'image_url',
              location: '리라쿠마 카페, 긴자',
              content: '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
              page: 2,
            },
            {
              image: 'image_url',
              location: '리라쿠마 카페, 긴자',
              content: '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
              page: 3,
            },
            {
              image: 'image_url',
              location: '리라쿠마 카페, 긴자',
              content: '초등학교때부터 가고 싶었던 리락쿠마 카페를 다녀왔어요.',
              page: 4,
            },
          ],
        },
      });
    },
  ),

  //시그니처_시그니처 수정하기
  http.post(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}`,
    ({ request, params }) => {
      return HttpResponse.json({
        title: '신사역 근처 카페 모음',
        pages: [
          {
            _id: 20,
            content: '공간이 매우 넓고 나무가 많아서 숲에 온 것 같은 느낌! ',
            location: '수저어어어어어어어어엉',
            page: 1,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            _id: 21,
            content: '베라 싫음 ',
            location: '베스킨라빈스',
            page: 2,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            _id: 22,
            content: '보드게임 싫음 ',
            location: '레드버튼',
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
        timestamp: '2024-02-05T07:40:21.691Z',
        code: 'OK',
        success: true,
        message: '시그니처 삭제 성공',
        data: null,
      });
    },
  ),
  //시그니처_시그니처 좋아요, 좋아요 취소
  //좋아요만 -> 좋아요 취소 추가해야함
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

  // 시그니처_시그니처 좋아요한 사용자 목록
  http.get(`${baseURL}${API_URL.LIKE_SIGNATURE}`, ({ request, params }) => {
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
  //시그니처_시그니처 댓글 작성하기
  http.post(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}/comment`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-12T18:55:52.393Z',
        code: 'CREATED',
        success: true,
        message: '시그니처 댓글 생성 성공',
        data: 2,
      });
    },
  ),
  //시그니처_시그니처 답글 작성하기
  http.post(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}/comment/:parentId`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-12T18:55:52.393Z',
        code: 'CREATED',
        success: true,
        message: '시그니처 답글 생성 성공',
        data: 2,
      });
    },
  ),
  //시그니처_시그니처 댓글/답글 수정하기
  http.patch(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}/comment/:commentId`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-13T09:39:40.316Z',
        code: 'OK',
        success: true,
        message: '시그니처 댓글 수정하기 성공',
        data: 2,
      });
    },
  ),
  //시그니처_시그니처 댓글/답글 삭제하기
  http.delete(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}/comment/:commentId`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-13T18:14:31.531Z',
        code: 'OK',
        success: true,
        message: '시그니처 댓글 삭제하기 성공',
        data: '1',
      });
    },
  ),
  // 시그니처_시그니처 댓글/답글 불러오기
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_SIGNATURE}/comment`,

    ({ request, params }) => {
      const url = new URL(request.url);
      const take = parseInt(url.searchParams.get('take')) || 5;
      const cursorId = parseInt(url.searchParams.get('cursorId')) || 0;
      if (!cursorId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          timestamp: '2024-02-12T18:21:21.636Z',
          code: 'OK',
          success: true,
          message: '시그니처 댓글 가져오기 성공',
          data: {
            data: [
              {
                _id: 2,
                content: '우와',
                parentId: 2, // (parentId == _id) 이므로 해당 댓글이 부모 댓글
                writer: {
                  _id: 3,
                  name: '고구마',
                  is_writer: true, // 현재 로그인한 회원(id=4)은 작성자 본인
                  image: null,
                },
                date: '2024.02.13',
                is_edited: false, // 댓글 수정된적 없음
              },
              {
                _id: 3,
                content: '우와 답글1',
                parentId: 2, // (parentId != _id) 이므로 해당 댓글은 답글
                writer: {
                  _id: 3,
                  name: '고구마',
                  is_writer: true,
                  image: null,
                },
                date: '2024.02.13',
                is_edited: false,
              },
              {
                _id: 5,
                content: '우와 답글2',
                parentId: 2,
                writer: {
                  _id: 3,
                  name: '고구마',
                  is_writer: true,
                  image: null,
                },
                date: '2024.02.13',
                is_edited: false,
              },
              {
                _id: 7,
                content: '답글입니다',
                parentId: 2,
                writer: {
                  _id: 4,
                  name: '감자', // 로그인한 사용자(id=4)와 작성자가 일치하지 않음
                  is_writer: false, // 그러므로 is_writer는 false
                  image: null,
                },
                date: '2024.02.13',
                is_edited: false,
              }, // 여기까지가 부모 댓글 아이디가 2인 댓,답글들
              {
                // 이제 다음 부모 댓글,답글들이 출력됨
                _id: 4,
                content: '재밌네요!',
                parentId: 4,
                writer: {
                  _id: 3,
                  name: '고구마',
                  is_writer: true,
                  image: null,
                },
                date: '2024.02.13',
                is_edited: false,
              },
            ],
            meta: {
              take: '5',
              total: 6,
              hasNextData: true,
              cursor: 4,
            },
          },
        });
      }
    },
  ),
];
