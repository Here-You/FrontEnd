import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

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

  // 회원 탈퇴
  http.delete(`${baseURL}${API_URL.WITHDRAW_MEMBER}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 204,
      success: true,
      message: '탈퇴 성공',
    });
  }),
];
