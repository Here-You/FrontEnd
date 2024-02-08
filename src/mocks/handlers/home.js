import { HttpResponse, delay, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const HomeHandlers = [
  //월별 일정 불러오기 (확정x)
  http.get(
    `${baseURL}${API_URL.LOAD_MONTHLY_SCHEDULE}`,
    ({ request, params }) => {
      const year = params.year;
      const month = params.month;

      if (!year || !month) {
        return new HttpResponse(null, { status: 404 });
      } else if (year && month) {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '닉네임 수정 성공',
          data: {
            year: year,
            month: month,
            monthlyJourneys: [
              {
                journeyId: 123,
                journeyTitle: 'My Journey',
                dateGroup: {
                  id: 1,
                  startDate: '2024-02-05',
                  endDate: '2024-02-06',
                },
                schedules: [
                  {
                    scheduleId: 1,
                    date: `${year}-${month}-11`,
                    title: 'Day 1 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 101,
                        content:
                          'Detail for Day 1 Detail for Day 1 Detail for Day 1 Detail for Day 1 Detail for Day 1',
                      },
                      {
                        detailScheduleId: 102,
                        content:
                          'Detail for Day 12 Detail for Day 12 Detail for Day 12 Detail for Day 12 Detail for Day 1',
                      },
                    ],
                    diary_written: true,
                  },
                  {
                    scheduleId: 2,
                    date: `${year}-${month}-12`,
                    title: 'Day 2 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 102,
                        content: 'Detail for Day 2 Schedule',
                      },
                    ],
                    diary_written: false,
                  },
                  {
                    scheduleId: 3,
                    date: `${year}-${month}-13`,
                    title: 'Day 3 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 103,
                        content: 'Detail for Day 3 Schedule',
                      },
                    ],
                    diary_written: false,
                  },
                ],
              },
              {
                journeyId: 124,
                journeyTitle: 'My Journey',
                dateGroup: {
                  id: 1,
                  startDate: '2024-02-08',
                  endDate: '2024-02-14',
                },
                schedules: [
                  {
                    scheduleId: 5,
                    date: `${year}-${month}-11`,
                    title: 'Day 1 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 101,
                        content:
                          'Detail for Day 1 Detail for Day 1 Detail for Day 1 Detail for Day 1 Detail for Day 1',
                      },
                      {
                        detailScheduleId: 102,
                        content:
                          'Detail for Day 12 Detail for Day 12 Detail for Day 12 Detail for Day 12 Detail for Day 1',
                      },
                    ],
                    diary_written: true,
                  },
                  {
                    scheduleId: 6,
                    date: `${year}-${month}-12`,
                    title: 'Day 2 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 102,
                        content: 'Detail for Day 2 Schedule',
                      },
                    ],
                    diary_written: false,
                  },
                  {
                    scheduleId: 7,
                    date: `${year}-${month}-13`,
                    title: 'Day 3 Schedule',
                    location: {
                      name: 'Google Location',
                      latitude: 37.7749,
                      longitude: -122.4194,
                    },
                    detailSchedules: [
                      {
                        detailScheduleId: 103,
                        content: 'Detail for Day 3 Schedule',
                      },
                    ],
                    diary_written: false,
                  },
                ],
              },
            ],
          },
        });
      }
    },
  ),
  //여정 저장하기
  http.post(`${baseURL}${API_URL.SAVE_JOURNEY}`, ({ params, request }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '여정 저장하기 성공',
      data: {
        id: 1,
        title: 'New Journey',
        dates: ['2024-01-11', '2024-01-12', '2024-01-13'],
      },
    });
  }),
  //여정 수정하기
  http.put(`${baseURL}${API_URL.UPDATE_JOURNEY}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        success: true,
        code: 200,
        message: '여정이 성공적으로 수정되었습니다.',
        data: {
          id: 1,
          journey_title: '수정된 여정의 제목',
        },
      });
    }
  }),
  //여정 삭제하기
  http.delete(`${baseURL}${API_URL.DELETE_JOURNEY}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        success: true,
        code: 200,
        message: '여정을 삭제했습니다.',
        data: null,
      });
    }
  }),
  //일정 작성하기
  http.put(`${baseURL}${API_URL.CREATE_SCHEDULE}`, ({ request, params }) => {
    return HttpResponse.json({
      success: true,
      code: 201,
      message: '일정을 작성했습니다.',
      data: null,
    });
  }),
  //일정 삭제하기
  http.delete(`${baseURL}${API_URL.DELETE_SCHEDULE}`, ({ request, params }) => {
    return HttpResponse.json({
      success: true,
      code: 200,
      message: '일정을 삭제했습니다.',
      data: null,
    });
  }),
  //일정 불러오기 (커서 기반)  -> 확정 안됨
  http.get(`${baseURL}${API_URL.GET_SCHEDULE}`, async ({ request, params }) => {
    const url = new URL(request.url);
    const journeyId = params.journeyId;
    const cursor = parseInt(url.searchParams.get('cursor')) || 0;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else if (journeyId) {
      await delay(3000);
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '일정 불러오기 성공',
        data: [
          {
            scheduleId: cursor + 1,
            journeyId: journeyId,
            title: 'Exploration',
            date: '2024-01-11',
            location: {
              name: 'Googleplex',
              latitude: 37.422,
              longitude: -122.0841,
            },
            detailSchedules: [
              {
                detailScheduleId: 1,
                content: 'Morning exploration',
                isDone: false,
              },
              {
                detailScheduleId: 2,
                content: 'Afternoon adventure',
                isDone: true,
              },
            ],
            diary_written: true,
          },
          {
            scheduleId: cursor + 2,
            journeyId: journeyId,
            title: 'Relaxation',
            date: '2024-01-12',
            location: {
              name: 'Sunny Beach',
              latitude: 36.7783,
              longitude: -119.4179,
            },
            detailSchedules: [
              {
                detailScheduleId: 3,
                content: 'Beach time',
                isDone: false,
              },
              {
                detailScheduleId: 4,
                content: 'Sunset watching',
                isDone: true,
              },
            ],
            diary_written: false,
          },
          {
            scheduleId: cursor + 3,
            journeyId: journeyId,
            title: 'City Tour',
            date: '2024-01-13',
            location: {
              name: 'City Center',
              latitude: 37.7749,
              longitude: -122.4194,
            },
            detailSchedules: [
              {
                detailScheduleId: 5,
                content: 'Visit landmarks',
                isDone: false,
              },
              {
                detailScheduleId: 6,
                content: 'Try local cuisine',
                isDone: false,
              },
            ],
            diary_written: false,
          },
          {
            scheduleId: cursor + 4,
            journeyId: journeyId,
            title: 'City Tour',
            date: '2024-01-13',
            location: {
              name: 'City Center',
              latitude: 37.7749,
              longitude: -122.4194,
            },
            detailSchedules: [
              {
                detailScheduleId: 5,
                content: 'Visit landmarks',
                isDone: false,
              },
              {
                detailScheduleId: 6,
                content: 'Try local cuisine',
                isDone: false,
              },
            ],
            diary_written: false,
          },
          {
            scheduleId: cursor + 5,
            journeyId: journeyId,
            title: 'City Tour',
            date: '2024-01-13',
            location: {
              name: 'City Center',
              latitude: 37.7749,
              longitude: -122.4194,
            },
            detailSchedules: [
              {
                detailScheduleId: 5,
                content: 'Visit landmarks',
                isDone: false,
              },
              {
                detailScheduleId: 6,
                content: 'Try local cuisine',
                isDone: false,
              },
            ],
            diary_written: false,
          },
        ],
      });
    }
  }),
  //세부 일정 추가하기
  http.post(
    `${baseURL}${API_URL.CREATE_DETAIL_SCHEDULE}`,
    ({ reqeust, params }) => {
      const scheduleId = params.scheduleId;
      if (!scheduleId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          success: true,
          code: 201,
          message: '세부 일정을 추가했습니다.',
          data: null,
        });
      }
    },
  ),
  //세부 일정 작성하기(수정하기)
  http.put(
    `${baseURL}${API_URL.UPDATE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const detailId = params.detailId;
      if (!detailId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          success: true,
          code: 201,
          message: '세부 일정을 작성했습니다.',
          data: null,
        });
      }
    },
  ),
  //세부 일정 상태 변경하기
  http.patch(
    `${baseURL}${API_URL.CHANGE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const detailId = params.detailId;
      if (!detailId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          success: true,
          code: 200,
          message: '세부 일정 상태를 변경했습니다',
          data: null,
        });
      }
    },
  ),
  //세부 일정 삭제하기
  http.delete(
    `${baseURL}${API_URL.DELETE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const detailId = params.detailId;
      if (!detailId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          success: true,
          code: 200,
          message: '세부 일정을 삭제했습니다.',
          data: null,
        });
      }
    },
  ),
  //일지 작성하기
  http.post(`${baseURL}${API_URL.CREATE_DIARY}`, ({ request, params }) => {
    const scheduleId = params.scheduleId;
    if (!scheduleId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        success: true,
        code: 201,
        message: '일지를 작성했습니다.',
        data: null,
      });
    }
  }),
  //일지 불러오기
  http.get(`${baseURL}${API_URL.GET_DIARY}`, ({ request, params }) => {
    const diaryId = params.diaryId;

    if (diaryId) {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '일지 불러오기 성공',
        data: [
          {
            id: diaryId,
            title: 'Diary Title 1',
            place: 'jejodu',
            weather: 'SUNNY',
            mood: 'HAPPY',
            content: 'jejudo ganda ~',
            user_id: 123,
            schedule_id: 456,
            location_id: 789,
            diary_image: {
              id: 101,
              uploader_id: 123,
              image_key:
                'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              diary_id: 1,
            },
            created: '2024-01-01T12:34:56Z',
            updated: '2024-01-02T09:00:00Z',
            deleted: null,
          },
        ],
      });
    } else {
      return HttpResponse.json({
        status: 400,
        success: false,
        message: 'Missing scheduleId parameter',
        error: 'Bad Request',
      });
    }
  }),
  //일지 수정하기
  http.put(`${baseURL}${API_URL.UPDATE_DIARY}`, ({ request, params }) => {
    const diaryId = params.diaryId;
    if (!diaryId) {
      return new HttpResponse(null, {
        success: false,
        code: 404,
        message: '일지가 없습니다.',
      });
    } else {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '일지 수정하기 성공',
      });
    }
  }),
  //월별 여정 불러오기 (지도)
  http.get(
    `${baseURL}${API_URL.GET_MONTHLY_JOURNEY_MAP}`,
    ({ request, params }) => {
      const year = params.year;
      const month = params.month;
      if (!year || !month) {
        return new HttpResponse(null, { status: 404 });
      } else if (year && month) {
        return HttpResponse.json({
          success: true,
          code: 200,
          message: '월별 여정을 불러오는데 성공했습니다.',
          data: [
            {
              journeyId: 1,
              title: '예윤잉',
              startDate: '2022-04-28',
              endDate: '2022-05-02',
              diaryCount: 2,
            },
            {
              journeyId: 2,
              title: '예윤잉',
              startDate: '2022-04-22',
              endDate: '2022-04-23',
              diaryCount: 0,
            },
          ],
        });
      }
    },
  ),
  //여정 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        success: true,
        code: 200,
        message: '여정을 불러오는데 성공했습니다.',
        data: {
          journey: {
            id: 1,
            title: '예윤잉',
            startDate: '2022-03-31',
            endDate: '2022-04-01',
          },
          locationList: [
            {
              date: '2022-03-31',
              location: {
                id: 1,
                latitude: '40.000000',
                longitude: '30.000000',
              },
              diaryImage: {
                id: 1,
                imageUrl:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              date: '2022-04-01',
              location: {
                id: 1,
                latitude: '40.000000',
                longitude: '30.000000',
              },
              diaryImage: {
                id: 2,
                imageUrl:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
          ],
        },
      });
    }
  }),
  //일지 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_DIARIES_MAP}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        success: true,
        code: 200,
        message: '일지를 불러오는데 성공했습니다.',
        data: [
          {
            journeyId: journeyId,
            date: '2022-03-20',
            diary: {
              id: 1,
              title: '일지',
              place: '내 집',
              weather: 'SUNNY',
              mood: 'HAPPY',
              content: '5번째 일지를 작성했습니다...',
              created: '2024-02-06T20:07:47.266Z',
              updated: '2024-02-06T20:07:47.266Z',
              deleted: null,
            },
            diaryImage: {
              id: 1,
              imageUrl:
                'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            journeyId: journeyId,
            date: '2022-03-21',
            diary: {
              id: 2,
              title: '일지',
              place: '내 집',
              weather: 'SUNNY',
              mood: 'HAPPY',
              content: '5번째 일지를 작성했습니다...',
              created: '2024-02-06T20:07:47.266Z',
              updated: '2024-02-06T20:07:47.266Z',
              deleted: null,
            },
            diaryImage: {
              id: 2,
              imageUrl:
                'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            journeyId: journeyId,
            date: '2022-03-22',
            diary: {
              id: 3,
              title: '일지',
              place: '내 집',
              weather: 'SUNNY',
              mood: 'HAPPY',
              content: '5번째 일지를 작성했습니다...',
              created: '2024-02-06T20:07:47.266Z',
              updated: '2024-02-06T20:07:47.266Z',
              deleted: null,
            },
            diaryImage: {
              id: 3,
              imageUrl:
                'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
            },
          },
          {
            journeyId: journeyId,
            date: '2022-03-23',
            diary: {
              id: 4,
              title: '일지',
              place: '내 집',
              weather: 'SUNNY',
              mood: 'HAPPY',
              content: '5번째 일지를 작성했습니다...',
              created: '2024-02-06T20:07:47.266Z',
              updated: '2024-02-06T20:07:47.266Z',
              deleted: null,
            },
            diaryImage: {
              id: 4,
              imageUrl:
                'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
            },
          },
        ],
      });
    }
  }),
  //세부 여정 확인하기 (지도)
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_JOURNEY_MAP}`,
    ({ request, params }) => {
      const journeyId = params.journeyId;
      if (!journeyId) {
        return new HttpResponse(null, { status: 404 });
      } else if (journeyId) {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '지도에서 세부 여정 불러오기 성공',
          data: {
            journey_id: journeyId,
            journey_title: '제주도 여행',
            schedules: [
              {
                schedule_id: 101,
                schedule_title: '첫 번째 일정',
                schedule_date: '2024-01-11',
                location: {
                  id: 1,
                  latitude: 33.4584,
                  longitude: 126.9422,
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'http://here-you.s3-website.ap-northeast-2.amazonaws.come9e9c94b-684a-4b4f-bdbe-c5696275b098.png',
                },
              },
              {
                schedule_id: 102,
                schedule_title: '두 번째 일정',
                schedule_date: '2024-01-11',
                location: {
                  id: 1,
                  latitude: 33.4584,
                  longitude: 126.9422,
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'http://here-you.s3-website.ap-northeast-2.amazonaws.come9e9c94b-684a-4b4f-bdbe-c5696275b098.png',
                },
              },
              {
                schedule_id: 103,
                schedule_title: '세 번째 일정',
                schedule_date: '2024-01-11',
                location: {
                  id: 1,
                  latitude: 33.4584,
                  longitude: 126.9422,
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'http://here-you.s3-website.ap-northeast-2.amazonaws.come9e9c94b-684a-4b4f-bdbe-c5696275b098.png',
                },
              },
            ],
          },
        });
      }
    },
  ),

  // 전체 일지 불러오기 (마이페이지)
  http.get(`${baseURL}${API_URL.GET_ALL_DIARY}`, ({ params, request }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '지도에서 일지 불러오기 성공',
      data: {
        diaries: [
          {
            id: 1,
            title: 'Diary Title 1',
            place: 'Diary Place 1',
            weather: 'SUNNY',
            mood: 'HAPPY',
            content: 'Diary Content 1',
            location: 'JEJU',
            diary_image: {
              id: 101,
              uploaderId: 123,
              imageKey: 'image_key_1.jpg',
            },
          },
          {
            id: 2,
            title: 'Diary Title 2',
            place: 'Diary Place 2',
            weather: 'RAINY',
            mood: 'SAD',
            content: 'Diary Content 2',
            location: 'JeJU',
            diary_image: {
              id: 103,
              uploaderId: 125,
              imageKey: 'image_key_3.jpg',
            },
          },
          {
            id: 3,
            title: 'Diary Title 3',
            place: 'Diary Place 3',
            weather: 'RAINY',
            mood: 'SAD',
            content: 'Diary Content 2',
            location: 'JeJU',
            diary_image: {
              id: 103,
              uploaderId: 125,
              imageKey: 'image_key_3.jpg',
            },
          },
        ],
      },
    });
  }),
];
