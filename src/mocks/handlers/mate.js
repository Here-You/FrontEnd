import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const MateHandlers = [
  //메이트 검색하기
  http.get(`${baseURL}${API_URL.SEARCH_MATE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('searchTerm');

    if (!searchTerm) {
      return new HttpResponse(null, { status: 404 });
    }

    if (searchTerm === '안예원') {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '메이트 검색 성공',
        data: {
          mates: [
            {
              _id: 1,
              name: '안예원',
              nickname: 'ahnyewon',
              bio: '안녕하세요 안예원 입니다. 반가워요',
              follower_num: 23,
              following_num: 23,
              image:
                'https://images.unsplash.com/photo-1706523964433-84c91f9086ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
              is_following: true,
            },
            {
              _id: 2,
              name: '안예원',
              nickname: 'ahnwon',
              bio: '안녕하세요 안원 입니다. 반가워요',
              follower_num: 2,
              following_num: 2,
              image:
                'https://images.unsplash.com/photo-1706523964433-84c91f9086ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
              is_following: false,
            },
          ],
        },
      });
    }
  }),

  //메이트 팔로우
  http.post(`${baseURL}${API_URL.FOLLOW_MATE}`, ({ request, params }) => {
    // 파라미터 (다이나믹 라우트 :userId)
    const userId = params.userId;

    if (!userId) {
      return new HttpResponse({
        status: 500,
        success: false,
        message: '서버 내부 오류',
      });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '팔로우 성공',
    });
  }),

  //메이트 언팔로우
  http.delete(`${baseURL}${API_URL.UNFOLLOW_MATE}`, ({ request, params }) => {
    const userId = params.userId;

    if (!userId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '언팔로우 성공',
    });
  }),

  //메이트 탐색
  http.get(`${baseURL}${API_URL.EXPLORE_MATE}`, ({ request, params }) => {
    const userId = params.userId;
    const cursor = params.cursor;
    const limit = params.limit;

    if (!userId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '메이트 탐색 성공',
      data: {
        recommend_mates: [
          {
            information: {
              user_id: 123456,
              location: '오사카',
            },
            mates: [
              {
                _id: 1,
                nickname: '매튜',
                bio: '안녕하세요',
                image:
                  'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_following: true,
                signature: [
                  {
                    _id: 1,
                    title: '뽀똔이와 함께하는 일본 뿌시기',
                    image:
                      'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  },
                  {
                    _id: 2,
                    title: '뽀똔이와 함께하는 일본 뿌시기',
                    image:
                      'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  },
                ],
              },
              {
                _id: 1,
                nickname: '준',
                bio: '반가워요',
                image:
                  'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                is_following: false,
                signature: [
                  {
                    _id: 1,
                    title: '부산 갈매기에게 인형을 빼앗기다',
                    image:
                      'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  },
                  {
                    _id: 2,
                    title: '부산 갈매기에게 인형을 빼앗기다',
                    image:
                      'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  },
                ],
              },
            ],
          },
        ],
        cursor: 'eyJjb25kaXRpb25JZCI6MjMsImxpbWl0IjoxMH0=',
        hasNextPage: true,
      },
    });
  }),

  //팔로워 목록 불러오기
  http.get(`${baseURL}${API_URL.GET_MATE_FOLLOWER}`, ({ request, params }) => {
    const userId = params.userId;

    if (!userId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '팔로워 리스트 불러오기 성공',
      data: {
        mates: [
          {
            _id: 1,
            name: '안예원',
            nickname: 'ahnyewon',
            bio: '안녕하세요 안예원 입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_following: true,
          },
          {
            _id: 2,
            name: '안예',
            nickname: 'ahnyw',
            bio: '안녕하세요 안예 입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_following: false,
          },
        ],
      },
    });
  }),

  //팔로잉 목록 불러오기
  http.get(`${baseURL}${API_URL.GET_MATE_FOLLOWING}`, ({ request, params }) => {
    const userId = params.userId;

    if (!userId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '팔로잉 리스트 불러오기 성공',
      data: {
        mates: [
          {
            _id: 1,
            name: '안예원',
            nickname: 'ahnyewon',
            bio: '안녕하세요 안예원입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_following: true,
          },
          {
            _id: 2,
            name: '안예',
            nickname: 'ahnyw',
            bio: '안녕하세요 안예입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            is_following: false,
          },
        ],
      },
    });
  }),

  //여행 규칙 작성하기
  http.post(`${baseURL}${API_URL.CREATE_MATE_RULE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 201,
      success: true,
      message: '여행 규칙 작성 및 메이트 초대 성공',
      data: {
        write: {
          _id: 1,
          main_title: '제주 여행 규칙을 세워보자',
          timestamp: 1643142400,
          rules: [
            {
              _id: 1,
              rule_title: '1. 기상 규칙',
              rule_detail: '7시까진 무조건 기상하기. 알람은 한개만 맞춰두기',
            },
            {
              _id: 2,
              rule_title: '2. 회비 규칙',
              rule_detail: '투명하게 관리하기',
            },
          ],
        },
        invitations: [
          {
            _id: 1,
            inviter_id: 23,
            invited_id: 12,
          },
          {
            _id: 1,
            inviter_id: 23,
            invited_id: 12,
          },
        ],
      },
    });
  }),

  //여행 규칙 초대할 메이트 검색하기
  http.get(`${baseURL}${API_URL.SEARCH_INVITE_MATE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('searchTerm');

    if (searchTerm === '안예원') {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '검색어를 통한 메이트 검색 성공',
        data: {
          mates: [
            {
              _id: 1,
              name: '안예원',
              nickname: 'ahnyewon',
              bio: '안녕하세요 안예원 입니다. 반가워요',
              imgae:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              _id: 1,
              name: '안예원',
              nickname: 'ahnyewon',
              bio: '안녕하세요 안예원 입니다. 반가워요',
              imgae:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        },
      });
    }
  }),

  //여행 규칙 참여 중인 인원
  http.get(
    `${baseURL}${API_URL.GET_PARTICIPATE_TEAM_MATE}`,
    ({ request, params }) => {
      const ruleId = params.rule_id;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 200,
        success: true,
        message: '참여중인 인원 불러오기 성공',
        data: {
          mates: [
            {
              _id: 1,
              name: '안예원',
              nickname: 'ahnyewon',
              bio: '안녕하세요 안예원 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              _id: 2,
              name: '안예',
              nickname: 'ahnyw',
              bio: '안녕하세요 안예 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        },
      });
    },
  ),

  //여행 규칙 확인하기
  http.get(`${baseURL}${API_URL.GET_TEAM_MATE_RULE}`, ({ request, params }) => {
    const ruleId = params.rule_id;
    const cursor = params.cursor;
    const limit = params.limit;

    if (!ruleId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '여행 규칙 확인하기 팀원 ver 성공',
      data: {
        rule_box: {
          _id: 1,
          main_title: '제주 여행 규칙을 세워보자',
          rules: [
            {
              _id: 1,
              rule_title: '1. 기상 규칙',
              rule_detail: '7시까진 무조건 기상하기. 알람은 한개만 맞춰두기',
            },
            {
              _id: 2,
              rule_title: '2. 회비 규칙',
              rule_detail: '투명하게 관리하기',
            },
          ],
        },
        participants: [
          {
            _id: '안예원',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            _id: '안',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        ],
        user_image: {
          image:
            'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        comments: [
          {
            _id: 1234,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment_text: '완벽한 규칙이네요',
            created_at: 1675275543,
          },
          {
            _id: 5678,
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment_text: '회비 관련 규칙도 추가해주세요',
            created_at: 1675275544,
          },
        ],
        cursor: 'eyJjb25kaXRpb25JZCI6MjMsImxpbWl0IjoxMH0=',
        hasNextPage: true,
      },
    });
  }),

  //여행 규칙 수정하기_글 수정
  http.patch(
    `${baseURL}${API_URL.UPDATE_TEAM_MATE_RULE}`,
    ({ request, params }) => {
      const ruleId = params.rule_id;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 200,
        success: true,
        message: '여행 규칙 수정 성공',
        data: {
          _id: 123,
          title: '수정된 여행 규칙 제목',
          content: '수정된 여행 규칙 본문 내용입니다',
          alignment: 'center',
        },
      });
    },
  ),

  //여행 규칙 수정하기_팀원 삭제
  http.delete(
    `${baseURL}${API_URL.DELETE_TEAM_MATE}`,
    ({ request, params }) => {
      const ruleId = params.rule_id;
      const mateId = params.ruleId.mateId;
      const inviterId = params.inviter_id;
      const invitedId = params.invited_id;

      if (!ruleId || !mateId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 200,
        success: true,
        message: '여행 규칙에 참여하는 팀원 수정 (삭제) 성공',
        data: {
          rule_id: 123456,
          inviter_id: 123,
          invited_id: 456,
        },
      });
    },
  ),

  //여행 규칙 코멘트 남기기
  http.post(
    `${baseURL}${API_URL.CREATE_MATE_RULE_COMMENT}`,
    ({ request, params }) => {
      const ruleId = params.rule_id;
      const userId = params.user_id;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 201,
        success: true,
        message: '코멘트 등록 성공',
        data: {
          _id: 789,
          user_id: 123,
          rule_id: 456,
          content: '기상 시간 규칙도 추가해주세요',
        },
      });
    },
  ),

  //여행 규칙 전체 리스트
  http.get(`${baseURL}${API_URL.GET_TEAM_RULE_LIST}`, ({ request, params }) => {
    const ruleId = params.rule_id;

    if (!ruleId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 200,
      success: true,
      message: '참여 중인 여행 규칙 리스트 불러오기 성공',
      data: {
        rules: [
          {
            _id: 1,
            participant_cnt: 3,
            title: '제주도 여행을 위한 규칙',
            last_updated_date: 1675275543,
            participants: [
              {
                _id: 345,
                image:
                  'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                _id: 678,
                image:
                  'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ],
          },
        ],
      },
    });
  }),
];
