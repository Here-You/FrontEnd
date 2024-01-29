import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_URL } from '@/constants/path';

export const HomeHandlers = [
  //월별 여정 불러오기
  http.get(
    `${baseURL}${API_URL.LOAD_MONTHLY_SCHEDULE}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const year = parseInt(url.searchParams.get('year')) || 0;
      const month = parseInt(url.searchParams.get('month')) || 0;

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
        status: 200,
        success: true,
        message: '여정 수정하기 성공',
        data: {
          journeyId: journeyId,
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
        status: 200,
        success: true,
        message: '여정 삭제하기 성공',
        data: {
          journeyId: journeyId,
        },
      });
    }
  }),
  //일정 생성하기
  http.post(`${baseURL}${API_URL.CREATE_SCHEDULE}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '일정 생성하기 성공',
      data: {
        scheduleId: 1,
        journeyId: 1,
        title: 'Exploration',
        date: '2024-01-11',
        location: {
          name: 'Googleplex',
          latitude: 37.422,
          longitude: -122.0841,
        },
      },
    });
  }),
  //일정 불러오기
  http.get(`${baseURL}${API_URL.GET_SCHEDULE}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else if (journeyId) {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '일정 불러오기 성공',
        data: [
          {
            scheduleId: 1,
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
              },
              {
                detailScheduleId: 2,
                content: 'Afternoon adventure',
              },
            ],
          },
          {
            scheduleId: 2,
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
              },
              {
                detailScheduleId: 4,
                content: 'Sunset watching',
              },
            ],
          },
          {
            scheduleId: 3,
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
              },
              {
                detailScheduleId: 6,
                content: 'Try local cuisine',
              },
            ],
          },
        ],
      });
    }
  }),
  //세부 일정 작성하기
  http.post(
    `${baseURL}${API_URL.CREATE_DETAIL_SCHEDULE}`,
    ({ reqeust, params }) => {
      const scheduleId = params.scheduleId;
      if (!scheduleId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '세부 일정 작성하기 성공',
          data: {
            id: 1,
            content: 'Meeting',
            scheduleId: scheduleId,
          },
        });
      }
    },
  ),
  //세부 일정 수정하기
  http.put(
    `${baseURL}${API_URL.UPDATE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const scheduleId = params.scheduleId;
      if (!scheduleId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '세부 일정 수정하기 성공',
          data: {
            id: 1,
            content: 'Meeting',
            scheduleId: scheduleId,
          },
        });
      }
    },
  ),
  //세부 일정 삭제하기
  http.delete(
    `${baseURL}${API_URL.DELETE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const scheduleId = params.scheduleId;
      if (!scheduleId) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '세부 일정 삭제하기 성공',
          data: {
            id: 1,
            content: 'Meeting',
            scheduleId: scheduleId,
          },
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
        status: 200,
        success: true,
        message: '일지 작성하기 성공',
        data: {
          id: 789, // 새로 생성된 Diary의 ID
          title: '오늘의 일기',
          place: '제주도',
          weather: 'SUNNY',
          mood: 'HAPPY',
          content: '오늘은 좋은 날이었어요.',
          user: {
            id: 123,
            name: '사용자 이름',
          },
          schedule: {
            id: scheduleId,
            date: '2024-01-11',
            title: '일정 제목',
          },
          location: {
            id: 789,
            name: '장소 이름',
            latitude: 37.123456,
            longitude: 127.123456,
          },
          image: {
            id: 101,
            uploader_id: 123,
            image_key:
              'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
          },
          created: '2024-01-11T12:34:56Z',
          updated: '2024-01-11T12:34:56Z',
        },
      });
    }
  }),
  //일지 불러오기
  http.get(`${baseURL}${API_URL.GET_DIARY}`, ({ request, params }) => {
    const scheduleId = params.scheduleId;
    if (!scheduleId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '일지 불러오기 성공',
        data: [
          {
            id: 1,
            title: 'Diary Title 1',
            place: 'jejodu',
            weather: 'SUNNY',
            mood: 'HAPPY',
            content: 'jejudo ganda ~',
            user_id: 123,
            schedule_id: scheduleId,
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
          {
            id: 2,
            title: 'Diary Title 1',
            place: 'jejodu',
            weather: 'SUNNY',
            mood: 'HAPPY',
            content: 'jejudo ganda ~',
            user_id: 123,
            schedule_id: scheduleId,
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
          {
            id: 3,
            title: 'Diary Title 1',
            place: 'jejodu',
            weather: 'SUNNY',
            mood: 'HAPPY',
            content: 'jejudo ganda ~',
            user_id: 123,
            schedule_id: scheduleId,
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
    }
  }),
  //월별 여정 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
    const url = new URL(request.url);
    const year = parseInt(url.searchParams.get('year')) || 0;
    const month = parseInt(url.searchParams.get('month')) || 0;
    if (!year || !month) {
      return new HttpResponse(null, { status: 404 });
    } else if (year && month) {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '월별 여정 불러오기 (지도) 성공',
        data: [
          {
            monthly_journey_id: 1,
            journey_list: [
              {
                journey_id: 1,
                journey_title: '서울 여행',
                diary_count: 5,
              },
              {
                journey_id: 2,
                journey_title: '부산 소풍',
                diary_count: 3,
              },
            ],
          },
        ],
      });
    }
  }),
  //여정 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
    const journeyId = params.journeyId;
    if (!journeyId) {
      return new HttpResponse(null, { status: 404 });
    } else {
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '지도에서 여정 불러오기 성공',
        data: {
          journey_info: {
            journey_title: '서울 여행',
            schedule_locations: [
              {
                schedule_id: 1,
                schedule_title: '첫 번째 일정',
                location: {
                  id: 1,
                  name: '서울 타워',
                  latitude: 37.5665,
                  longitude: 126.978,
                },
                diary_image: {
                  diary_id: 101,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 2,
                schedule_title: '두 번째 일정',
                location: {
                  id: 2,
                  name: '장소 2',
                  latitude: 35.5665,
                  longitude: 127.978,
                },
                diary_image: {
                  diary_id: 101,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 3,
                schedule_title: '세 번째 일정',
                location: {
                  id: 3,
                  name: '장소 3',
                  latitude: 35.5665,
                  longitude: 128.978,
                },
                diary_image: {
                  diary_id: 101,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
            ],
          },
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
        status: 200,
        success: true,
        message: '지도에서 일지 불러오기 성공',
        data: {
          journeyTitle: 'Journey Title',
          diaries: [
            {
              id: 1,
              title: 'Diary Title 1',
              place: 'Diary Place 1',
              weather: 'SUNNY',
              mood: 'HAPPY',
              content: 'Diary Content 1',
              userId: 123,
              scheduleId: 456,
              locationId: 789,
              diary_image: {
                id: 101,
                uploaderId: 123,
                imageKey:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              id: 2,
              title: 'Diary Title 2',
              place: 'Diary Place 2',
              weather: 'RAINY',
              mood: 'SAD',
              content: 'Diary Content 2',
              userId: 124,
              scheduleId: 457,
              locationId: 790,
              diary_image: {
                id: 103,
                uploaderId: 125,
                imageKey:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              id: 3,
              title: 'Diary Title 2',
              place: 'Diary Place 2',
              weather: 'RAINY',
              mood: 'SAD',
              content: 'Diary Content 2',
              userId: 124,
              scheduleId: 457,
              locationId: 790,
              diary_image: {
                id: 104,
                uploaderId: 125,
                imageKey:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
            {
              id: 4,
              title: 'Diary Title 2',
              place: 'Diary Place 2',
              weather: 'RAINY',
              mood: 'SAD',
              content: 'Diary Content 2',
              userId: 124,
              scheduleId: 457,
              locationId: 790,
              diary_image: {
                id: 105,
                uploaderId: 125,
                imageKey:
                  'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
              },
            },
          ],
        },
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
                schedule_id: 1,
                schedule_title: '첫 번째 일정',
                schedule_date: '2024-01-11',
                participant: 'John Doe',
                location: {
                  id: 1,
                  name: '제주 성산일출봉',
                  latitude: 33.4584,
                  longitude: 126.9422,
                  image:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 2,
                schedule_title: '두 번째 일정',
                schedule_date: '2024-01-11',
                participant: 'John Doe',
                location: {
                  id: 1,
                  name: '장소 2',
                  latitude: 35.4584,
                  longitude: 126.9422,
                  image:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 3,
                schedule_title: '세 번째 일정',
                schedule_date: '2024-01-11',
                participant: 'John Doe',
                location: {
                  id: 1,
                  name: '장소 3',
                  latitude: 33.4584,
                  longitude: 128.9422,
                  image:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
                diary_image: {
                  diary_id: 201,
                  image_key:
                    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
            ],
          },
        });
      }
    },
  ),
  http.get(
    `${baseURL}${API_URL.GET_MONTHLY_JOURNEY_MAP}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const year = parseInt(url.searchParams.get('year')) || 0;
      const month = parseInt(url.searchParams.get('month')) || 0;

      if (!year & !month) {
        return new HttpResponse(null, { status: 404 });
      } else {
        return HttpResponse.json({
          status: 200,
          success: true,
          message: '월별 여정 불러오기 성공',
          data: [
            {
              monthly_journey_id: 1,
              journey_list: [
                {
                  journey_id: 1,
                  journey_title: `${year}년 ${month}월 서울 여행`,
                  diary_count: 5,
                },
                {
                  journey_id: 2,
                  journey_title: `${year}년 ${month}월 부산 소풍`,
                  diary_count: 3,
                },
                // 추가적인 Journey 항목...
              ],
            },
          ],
        });
      }
    },
  ),
  http.get(
    `${baseURL}${API_URL.GET_JOURNEY_MAP}/:journeyId`,
    ({ request, params }) => {
      const journeyId = params.journeyId;

      return HttpResponse.json({
        status: 200,
        success: true,
        message: '지도에서 여정 불러오기 성공',
        data: {
          journey_info: {
            journey_title: '서울 여행',
            schedule_locations: [
              {
                schedule_id: 1,
                schedule_title: '첫 번째 일정',
                location: {
                  id: 1,
                  name: '서울 타워',
                  latitude: 37.552497,
                  longitude: 127.1333,
                },
                diary_image: {
                  diary_id: 102,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1510218129079-74e00c5a90ea?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 2,
                schedule_title: '두 번째 일정',
                location: {
                  id: 2,
                  name: '부산 타워',
                  latitude: 37.561068,
                  longitude: 127.160582,
                },
                diary_image: {
                  diary_id: 103,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1588001832198-c15cff59b078?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 3,
                schedule_title: '세 번째 일정',
                location: {
                  id: 3,
                  name: '잠실 타워',
                  latitude: 37.5665,
                  longitude: 126.978,
                },
                diary_image: {
                  diary_id: 104,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 4,
                schedule_title: '네 번째 일정',
                location: {
                  id: 4,
                  name: '안산 야호!',
                  latitude: 37.3218778,
                  longitude: 126.8308848,
                },
                diary_image: {
                  diary_id: 105,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1512641406448-6574e777bec6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
                },
              },
              {
                schedule_id: 5,
                schedule_title: '다섯 번쨰 이렂ㅇ',
                location: {
                  id: 5,
                  name: '잠실 양홍!',
                  latitude: 37.531338,
                  longitude: 127.129174,
                },
                diary_image: {
                  diary_id: 106,
                  uploaderId: 125,
                  imageKey:
                    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
              },
            ],
          },
        },
      });
    },
  ),
];
