import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const PreviewHandlers = [
  http.get(`${baseURL}${API_PATH.SIGNATURE_PREVIEW}`, (req, res, ctx) => {
    const previewData = [
      {
        id: 1,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        previewUrl:
          'https://i.ibb.co/D1bwz3j/Kakao-Talk-20231203-204945606.png" alt="Kakao-Talk-20231203-204945606',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        heart: 3012,
      },
      {
        id: 2,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        previewUrl:
          'https://i.ibb.co/D1bwz3j/Kakao-Talk-20231203-204945606.png" alt="Kakao-Talk-20231203-204945606',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        heart: 3012,
      },
      {
        id: 3,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        previewUrl:
          'https://i.ibb.co/D1bwz3j/Kakao-Talk-20231203-204945606.png" alt="Kakao-Talk-20231203-204945606',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        heart: 3012,
      },
      {
        id: 4,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        previewUrl:
          'https://i.ibb.co/D1bwz3j/Kakao-Talk-20231203-204945606.png" alt="Kakao-Talk-20231203-204945606',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        heart: 3012,
      },
    ];
    return HttpResponse.json(previewData);
  }),
];
