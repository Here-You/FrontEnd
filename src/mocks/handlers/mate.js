import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_BASE, API_URL } from '@/constants/path';

export const MateHandlers = [
  //메이트 검색하기
  http.get(`${baseURL}${API_URL.FOLLOW_MATE}/search`, ({ request, params }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('searchTerm');
    const cursor = url.searchParams.get('cursor');
    const take = url.searchParams.get('take');

    if (!searchTerm) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '메이트 검색 성공',
        data: {
          mates: [
            {
              _id: 13,
              name: '안예원',
              nickname: 'ahnyewon',
              bio: '안녕하세요 안예원 입니다. 반가워요',
              follower_num: 23,
              following_num: 23,
              image:
                'https://plus.unsplash.com/premium_photo-1671478394583-3d91fd9c7ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
              is_following: true,
            },
            {
              _id: 12,
              name: '안원',
              nickname: 'ahnwon',
              bio: '안녕하세요 안원 입니다. 반가워요',
              follower_num: 2,
              following_num: 2,
              image:
                'https://plus.unsplash.com/premium_photo-1671478394583-3d91fd9c7ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
              is_following: false,
            },
            {
              _id: 11,
              name: '안예',
              nickname: 'ahnyw',
              bio: '안녕하세요 안예 입니다. 반가워요',
              follower_num: 200,
              following_num: 200,
              image:
                'https://plus.unsplash.com/premium_photo-1671478394583-3d91fd9c7ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
              is_following: true,
            },
          ],
          meta: {
            total: 13,
            take: take,
            hasNextData: true,
            cursor: cursor,
          },
        },
      });
    }
  }),

  //메이트 팔로우
  http.patch(
    `${baseURL}${API_URL.FOLLOW_MATE}/:followingId`,
    ({ request, params }) => {
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
    },
  ),

  //메이트 언팔로우
  http.delete(
    `${baseURL}${API_URL.UNFOLLOW_MATE}/:userId`,
    ({ request, params }) => {
      const userId = params.userId;

      if (!userId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 200,
        success: true,
        message: '언팔로우 성공',
      });
    },
  ),

  //메이트 탐색1
  http.get(
    `${baseURL}${API_URL.EXPLORE_RANDOM_MATE}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const cursorId = parseInt(url.searchParams.get('cursor')) || 0;
      const take = parseInt(url.searchParams.get('take')) || 0;

      return HttpResponse.json({
        timestamp: '2024-02-09T12:13:45.477Z',
        code: 'OK',
        success: true,
        message: '랜덤 메이트 추천 데이터 생성 성공',
        data: {
          data: [
            {
              _id: 4,
              userName: '감감감',
              introduction: '사용자 소개',
              is_followed: false,
              userImage: null,
              signatures: [],
            },
            {
              _id: 3,
              userName: '고고고',
              introduction: '사용자 소개',
              is_followed: false,
              userImage: null,
              signatures: [
                {
                  _id: 22,
                  title: '강남역근처',
                  image:
                    'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
                },
              ],
            },
            {
              _id: 2,
              userName: '카카카',
              introduction: '사용자 소개',
              is_followed: false,
              userImage: null,
              signatures: [],
            },
          ],
          meta: {
            take: '3',
            total: 4,
            hasNextData: true,
            cursor: 2,
          },
        },
      });
    },
  ),
  //메이트 탐색2
  http.get(`${baseURL}${API_URL.LOCATION_MATE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const cursorId = parseInt(url.searchParams.get('cursor')) || 0;
    const take = parseInt(url.searchParams.get('take')) || 0;

    return HttpResponse.json({
      timestamp: '2024-02-09T11:49:13.427Z',
      code: 'OK',
      success: true,
      message: '장소 기반 메이트 추천 리스트 가져오기 성공',
      data: {
        location: '알베르',
        userName: '샐리',
        mateProfiles: [
          {
            _id: 3,
            mateName: '써니',
            introduction: '안녕하세요 반가워요',
            is_followed: false,
            mateImage:
              'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
            signatures: [
              {
                _id: 22,
                title: '강남역 근처 카페 추천',
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
              },
              {
                _id: 22,
                title: '강남역근처',
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
              },
            ],
          },
          {
            _id: 4,
            mateName: '예니',
            introduction: '안녕하세요 반가워요',
            is_followed: false,
            mateImage:
              'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
            signatures: {
              _id: 22,
              title: '강남역 근처 카페 추천',
              image:
                'https://hereyou-cdn.kaaang.dev/signature/07f8c65c-5966-4b2e-9d96-08d5d084d013.png',
            },
          },
        ],
      },
    });
  }),

  //팔로잉 목록 불러오기
  http.get(`${baseURL}${API_URL.GET_MATE_FOLLOW}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '팔로잉 리스트 불러오기 성공',
      data: {
        mates: [
          {
            _id: 1,
            name: '팔로잉_안예원',
            nickname: 'ahnyewon',
            bio: '안녕하세요 안예원입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            followId: 123,
          },
          {
            _id: 2,
            name: '안예',
            nickname: 'ahnyw',
            bio: '안녕하세요 안예입니다. 반가워요',
            image:
              'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            followId: 'null',
          },
        ],
      },
    });
  }),
  //팔로워 목록 불러오기
  http.get(`${baseURL}${API_URL.GET_MATE_FOLLOWER}`, ({ request, params }) => {
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
            introduction: '안녕하세요 안예원 입니다. 반가워요',
            image:
              'https://plus.unsplash.com/premium_photo-1671478394583-3d91fd9c7ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
            followId: 123,
          },
          {
            _id: 2,
            name: '안예',
            nickname: 'ahnyw',
            introduction: '안녕하세요 안예 입니다. 반가워요',
            image:
              'https://plus.unsplash.com/premium_photo-1671478394583-3d91fd9c7ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
            followId: 'null',
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
          id: 1,
          mainTitle: '제주 여행 규칙을 세워보자',
          created: 1643142400,
          userId: 12,
          rules: [
            {
              ruleTitle: '1. 기상 규칙',
              ruleDetail: '7시까진 무조건 기상하기. 알람은 한개만 맞춰두기',
            },
            {
              ruleTitle: '2. 회비 규칙',
              ruleDetail: '투명하게 관리하기',
            },
          ],
        },
        invitedId: [12, 123, 124],
      },
    });
  }),

  //여행 규칙 초대할 메이트 검색하기
  http.get(`${baseURL}${API_URL.SEARCH_MATE}`, ({ request, params }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('searchTerm');
    const cursor = url.searchParams.get('cursor');
    const take = url.searchParams.get('take');

    if (searchTerm === '안예원') {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '여행 규칙 작성에 초대할 메이트 검색 성공',
        data: {
          mates: [
            {
              id: 123,
              name: '안예원',
              nickname: 'ahnyewon',
              introduction: '안녕하세요 안예원 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 1234,
              name: '안원',
              nickname: 'ahnwon',
              introduction: '안녕하세요 안원 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 1235,
              name: '예원',
              nickname: 'yewon',
              introduction: '안녕하세요 예원 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
          meta: {
            total: 13,
            take: take,
            hasNextData: true,
            cursor: cursor,
          },
        },
      });
    }
  }),

  //여행 규칙 참여 중인 인원
  http.get(
    `${baseURL}${API_URL.GET_PARTICIPATE_TEAM_MATE}`,
    ({ request, params }) => {
      const ruleId = params.ruleId;

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
              id: 1,
              name: '안예원',
              nickname: 'ahnyewon',
              introduction: '안녕하세요 안예원 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              name: '안예',
              nickname: 'ahnyw',
              introduction: '안녕하세요 안예 입니다. 반가워요',
              image:
                'https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        },
      });
    },
  ),

  //여행 규칙 확인하기 (게시글)
  http.get(
    `${baseURL}${API_URL.GET_TEAM_MATE_RULE}/:ruleId`,
    ({ request, params }) => {
      const ruleId = params.ruleId;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        timestamp: '2024-02-12T07:35:57.786Z',
        code: 'OK',
        success: true,
        message: '여행 규칙 상세 페이지 (게시글) 조회 성공',
        data: {
          id: '21',
          mainTitle: '일본 여행',
          rulePairs: [
            {
              id: 40,
              ruleTitle: '취침 시간 규칙',
              ruleDetail: '12시엔 자기',
            },
            {
              id: 41,
              ruleTitle: '기상 규칙',
              ruleDetail: '7시 기상',
            },
          ],
          detailMembers: [
            {
              id: 2,
              name: 'Test2',
              image: null,
            },
            {
              id: 3,
              name: 'Test3',
              image: null,
            },
            {
              id: 1,
              name: 'Test1',
              image: null,
            },
          ],
          comments: [
            {
              id: 1234,
              image: 'profile_img_url',
              text: '완벽한 규칙이네요',
              created: 1675275543,
            },
            {
              id: 124,
              image: 'profile_img_url',
              text: '완벽한 규칙이네요',
              created: 1675275543,
            },
          ],
          metaToBack: {
            total: 3,
            take: 2,
            cursor: 1,
            hasNextData: true,
          },
        },
      });
    },
  ),

  //여행 규칙 확인하기 (댓글)
  http.get(
    `${API_URL.GET_TEAM_MATE_RULE}/:ruleId/comments`,
    ({ request, params }) => {
      const ruleId = params.ruleId;
      const url = new URL(request.url);
      const cursor = parseInt(url.searchParams.get('cursor')) || 0;
      const take = parseInt(url.searchParams.get('take')) || 0;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        timestamp: '2024-02-08T12:15:07.069Z',
        code: 'OK',
        success: true,
        message: '여행 댓글 불러오기 성공',
        data: [
          {
            comments: [
              {
                id: cursor + 1,
                image:
                  'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
                text: `${cursor} 댓글 내용 1`,
                created: '2024-02-07T12:22:00.453Z',
              },
              {
                id: cursor + 2,
                image:
                  'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
                text: `${cursor} 댓글 내용 2`,
                created: '2024-02-07T12:22:00.453Z',
              },
              {
                id: cursor + 3,
                image:
                  'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
                text: `${cursor} 댓글 내용 3`,
                created: '2024-02-07T12:22:00.453Z',
              },
              {
                id: cursor + 4,
                image:
                  'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
                text: `${cursor} 댓글 내용 4`,
                created: '2024-02-07T12:22:00.453Z',
              },
              {
                id: cursor + 5,
                image:
                  'https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
                text: `${cursor} 댓글 내용 5`,
                created: '2024-02-07T12:22:00.453Z',
              },
            ],
            total: 13,
            take: take,
            hasNextData: true,
            cursor: cursor,
          },
        ],
      });
    },
  ),

  //여행 규칙 수정하기_글 수정
  http.patch(
    `${baseURL}${API_URL.UPDATE_TEAM_MATE_RULE}`,
    ({ request, params }) => {
      const ruleId = params.ruleId;

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 201,
        success: true,
        message: '여행 규칙 수정 성공',
        data: {
          write: {
            id: 1,
            mainTitle: '제주 여행 규칙을 세워보자',
            updated: 1643142400,
            rules: [
              {
                id: 1,
                ruleTitle: '1. 기상 규칙',
                ruleDetail: '7시까진 무조건 기상하기. 알람은 한개만 맞춰두기',
              },
              {
                id: 2,
                ruleTitle: '2. 회비 규칙',
                ruleDetail: '투명하게 관리하기',
              },
            ],
          },
        },
      });
    },
  ),

  //여행 규칙 수정하기_팀원 삭제
  http.delete(
    `${baseURL}${API_URL.DELETE_TEAM_MATE}`,
    ({ request, params }) => {
      const ruleId = params.ruleId;
      const inviterId = params.inviter_id;
      const invitedId = params.mateId;

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
    `${baseURL}${API_URL.CREATE_MATE_RULE_COMMENT}/:ruleId`,
    ({ request, params }) => {
      const ruleId = params.ruleId;

      console.log(ruleId);

      if (!ruleId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        status: 201,
        success: true,
        message: '코멘트 등록 성공',
      });
    },
  ),

  //여행 규칙 전체 리스트
  http.get(`${baseURL}${API_URL.GET_TEAM_RULE_LIST}`, ({ request, params }) => {
    return HttpResponse.json({
      timestamp: '2024-02-10T15:33:53.125Z',
      code: 'OK',
      success: true,
      message: '여행 규칙 전체 리스트 조회 성공',
      data: [
        {
          id: '20',
          title: '일본 여행',
          updated: '2024-02-09T03:37:32.711Z',
          memberCnt: 3,
          memberPairs: [
            {
              id: 3,
              name: 'Test3',
              image: null,
            },
            {
              id: 2,
              name: 'Test2',
              image: null,
            },
            {
              id: 1,
              name: 'Test1',
              image: null,
            },
          ],
        },
        {
          id: '21',
          title: '일본 여행',
          updated: '2024-02-09T04:47:27.972Z',
          memberCnt: 3,
          memberPairs: [
            {
              id: 2,
              name: 'Test2',
              image: null,
            },
            {
              id: 3,
              name: 'Test3',
              image: null,
            },
            {
              id: 1,
              name: 'Test1',
              image: null,
            },
          ],
        },
        {
          id: '31',
          title: '중국 여행',
          updated: '2024-02-09T13:18:30.953Z',
          memberCnt: 3,
          memberPairs: [
            {
              id: 2,
              name: 'Test2',
              image: null,
            },
            {
              id: 3,
              name: 'Test3',
              image: null,
            },
            {
              id: 1,
              name: 'Test1',
              image: null,
            },
          ],
        },
      ],
    });
  }),

  // 여행 규칙 참여에서 나가기
  http.delete(`${API_URL.EXIT_TEAM_RULE}/:ruleId`, ({ request, params }) => {
    const ruleId = params.ruleId;

    if (!ruleId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      status: 204,
      success: true,
      message: '여행 규칙에서 나가기 성공',
    });
  }),
  //메이트 프로필 정보
  http.get(
    `${baseURL}${API_URL.MATE_PROFILE_SEARCH}/:mateId`,
    ({ request, params }) => {
      return HttpResponse.json({
        timestamp: '2024-02-10T17:27:55.001Z',
        code: 'OK',
        success: true,
        message: '유저 프로필 정보 가져오기 성공',
        data: {
          _id: 1,
          nickname: '여행의 이유',
          introduction: '졸리당',
          image: null,
          is_followed: true,
          following: 1,
          follower: 2,
          signatures: 28,
          isQuit: false,
        },
      });
    },
  ),

  //메이트 시그니처 리스트
  http.get(
    `${baseURL}${API_URL.MATE_PROFILE_SEARCH}/signature/:mateId`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const take = parseInt(url.searchParams.get('take')) || 5;
      const cursorId = parseInt(url.searchParams.get('cursorId')) || 0;
      if (!cursorId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          timestamp: '2024-02-10T19:54:19.895Z',
          code: 'OK',
          success: true,
          message: '메이트의 시그니처 가져오기 성공',
          data: {
            data: [
              {
                _id: 27,
                title: '알베르 테스트 유저5',
                liked: 0,
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/91a3d721-0998-44e6-91a0-843c00f3ab1b.png',
              },
              {
                _id: 26,
                title: '알베르 테스트 유저5',
                liked: 0,
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/d5956637-c404-4985-8a12-764455ce6cad.png',
              },
              {
                _id: 25,
                title: '알베르 테스트 유저5',
                liked: 0,
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/300492d8-34ec-44f2-9fff-2de15686ad75.png',
              },
              {
                _id: 24,
                title: '알베르 테스트 유저5',
                liked: 0,
                image:
                  'https://hereyou-cdn.kaaang.dev/signature/c663dc21-3b0e-4902-aa11-b90d91a12787.png',
              },
            ],
            meta: {
              take: '5',
              total: 4,
              hasNextData: false,
              cursor: null,
            },
          },
        });
      }
    },
  ),
];
