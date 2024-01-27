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
      const month = url.searchParams.get('month') || '';
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '닉네임 수정 성공',
        data: {
          year: 2024,
          month: 1,
          monthlyJourneys: [
            {
              journeyId: 123,
              journeyTitle: 'My Journey',
              schedules: [
                {
                  scheduleId: 1,
                  date: '2024-01-11',
                  title: 'Day 1 Schedule',
                  location: {
                    name: 'Google Location',
                    latitude: 37.7749,
                    longitude: -122.4194,
                  },
                  detailSchedules: [
                    {
                      detailScheduleId: 101,
                      content: 'Detail for Day 1 Schedule',
                    },
                  ],
                },
                {
                  scheduleId: 2,
                  date: '2024-01-12',
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
                },
                {
                  scheduleId: 3,
                  date: '2024-01-13',
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
                },
              ],
            },
          ],
        },
      });
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
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '여정 수정하기 성공',
      data: {},
    });
  }),
  //여정 삭제하기
  http.delete(`${baseURL}${API_URL.DELETE_JOURNEY}`, ({ request, params }) => {
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '여정 삭제하기 성공',
      data: {},
    });
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
    const url = new URL(request.url);
    const journeyId = parseInt(url.searchParams.get('journeyId')) || 0;
    return HttpResponse.json({
      status: 200,
      success: true,
      message: '일정 불러오기 성공',
      data: [
        {
          scheduleId: 1,
          journeyId: 1,
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
          journeyId: 1,
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
          journeyId: 1,
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
  }),
  //세부 일정 작성하기
  http.post(
    `${baseURL}${API_URL.CREATE_DETAIL_SCHEDULE}`,
    ({ reqeust, params }) => {
      const url = new URL(request.url);
      const scheduleId = parseInt(url.searchParams.get('scheduleId')) || 0;
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '세부 일정 작성하기 성공',
        data: {
          id: 1,
          content: 'Meeting',
          scheduleId: 1,
        },
      });
    },
  ),
  //세부 일정 수정하기
  http.put(
    `${baseURL}${API_URL.UPDATE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const scheduleId = parseInt(url.searchParams.get('scheduleId')) || 0;
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '세부 일정 수정하기 성공',
        data: {
          id: 1,
          content: 'Meeting',
          scheduleId: 1,
        },
      });
    },
  ),
  http.delete(
    `${baseURL}${API_URL.DELETE_DETAIL_SCHEDULE}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const scheduleId = parseInt(url.searchParams.get('scheduleId')) || 0;
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '세부 일정 삭제하기 성공',
        data: {
          id: 1,
          content: 'Meeting',
          scheduleId: 1,
        },
      });
    },
  ),
  //일지 작성하기
  http.post(`${baseURL}${API_URL.CREATE_DIARY}`, ({ request, params }) => {
    const url = new URL(request.url);
    const scheduleId = parseInt(url.searchParams.get('scheduleId')) || 0;
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
          id: 456,
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
          image_key: 'image_key_1.jpg',
        },
        created: '2024-01-11T12:34:56Z',
        updated: '2024-01-11T12:34:56Z',
      },
    });
  }),
  //일지 불러오기
  http.get(`${baseURL}${API_URL.GET_DIARY}`, ({ request, params }) => {
    const url = new URL(request.url);
    const scheduleId = parseInt(url.searchParams.get('scheduleId')) || 0;
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
          schedule_id: 456,
          location_id: 789,
          diary_image: {
            id: 101,
            uploader_id: 123,
            image_key: 'image_key_1.jpg',
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
          schedule_id: 456,
          location_id: 789,
          diary_image: {
            id: 101,
            uploader_id: 123,
            image_key: 'image_key_1.jpg',
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
          schedule_id: 456,
          location_id: 789,
          diary_image: {
            id: 101,
            uploader_id: 123,
            image_key: 'image_key_1.jpg',
            diary_id: 1,
          },
          created: '2024-01-01T12:34:56Z',
          updated: '2024-01-02T09:00:00Z',
          deleted: null,
        },
      ],
    });
  }),
  //월별 여정 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
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
  }),
  //여정 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_JOURNEY_MAP}`, ({ request, params }) => {
    const url = new URL(request.url);
    const journey_id = parseInt(url.searchParams.get('journey_id')) || 0;
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
                imageKey: 'image_key_3.jpg',
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
                imageKey: 'image_key_3.jpg',
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
                imageKey: 'image_key_3.jpg',
              },
            },
          ],
        },
      },
    });
  }),
  //일지 불러오기 (지도)
  http.get(`${baseURL}${API_URL.GET_DIARIES_MAP}`, ({ request, params }) => {
    const url = new URL(request.url);
    const journey_id = parseInt(url.searchParams.get('journey_id')) || 0;
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
            userId: 124,
            scheduleId: 457,
            locationId: 790,
            diary_image: {
              id: 103,
              uploaderId: 125,
              imageKey: 'image_key_3.jpg',
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
              imageKey: 'image_key_3.jpg',
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
              imageKey: 'image_key_3.jpg',
            },
          },
        ],
      },
    });
  }),
  //세부 여정 확인하기 (지도)
  http.get(
    `${baseURL}${API_URL.GET_DETAIL_JOURNEY_MAP}`,
    ({ request, params }) => {
      const url = new URL(request.url);
      const journey_id = parseInt(url.searchParams.get('journey_id')) || 0;
      return HttpResponse.json({
        status: 200,
        success: true,
        message: '지도에서 세부 여정 불러오기 성공',
        data: {
          journey_id: 1,
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
                image: 's3://your-bucket/path/to/image.jpg',
              },
              diary_image: {
                diary_id: 201,
                image_key: 's3://your-bucket/path/to/diary_image1.jpg',
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
                image: 's3://your-bucket/path/to/image.jpg',
              },
              diary_image: {
                diary_id: 201,
                image_key: 's3://your-bucket/path/to/diary_image1.jpg',
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
                image: 's3://your-bucket/path/to/image.jpg',
              },
              diary_image: {
                diary_id: 201,
                image_key: 's3://your-bucket/path/to/diary_image1.jpg',
              },
            },
          ],
        },
      });
    },
  ),
];
