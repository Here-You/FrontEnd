import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH, API_URL } from '@/constants/path';

export const ProfileHandlers = [
  // 로그인
  http.post(`${baseURL}${API_URL.LOGIN}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '로그인 성공',
      token: 'JWT_TOKEN',
    });
  }),
  // SNS 로그인
  http.post(`${baseURL}${API_URL.SNS_LOGIN}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '로그인 성공',
      token: 'JWT_TOKEN',
      register_required: false,
    });
  }), // 추가 정보입력
  http.post(
    `${baseURL}${API_URL.ADDITIONAL_INFORMATION}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '추가정보 입력 성공',
      });
    },
  ),
  // 로그아웃 (JWT 사용시 구현 X)

  // 닉네임 수정
  http.put(`${baseURL}${API_URL.UPDATE_NICKNAME}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '닉네임 수정 성공',
    });
  }),

  // 프로필 소개 수정
  http.put(
    `${baseURL}${API_URL.UPDATE_PROFILE_INTRO}`,
    ({ request, params }) => {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '프로필 수정 성공',
      });
    },
  ),

  // 알림 (아직 미구현)
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

  http.put(`${baseURL}${API_URL.PUBLIC_SCOPE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '공개범위 설정 성공',
     });
  }),

  // 회원 탈퇴
  http.delete(`${baseURL}${API_URL.WITHDRAW_MEMBER}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 204,
      success: true,
      message: '탈퇴 성공',
    });
  }),

  // 프로필 정보 가져오기
  http.get(`${baseURL}${API_PATH.MY_PAGE_INFO}`, (req, res, ctx) => {
    const profile = {
      nickname: '닉네임',
      type: '🐯',
      email: 'abcde@naver.com',
      introduction: '특기는 여행, 취미는 기록: >',
      follower: '팔로워',
      following: '팔로잉',
    };
    return HttpResponse.json(profile);
  }),
];
