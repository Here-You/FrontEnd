import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const mateLookHandlers = [
  http.get(`${baseURL}${API_PATH.MATE_LOOK}`, (req, res, ctx) => {
    const mates = [
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        signatureImg: '/images/mateSignature.svg',
        title: '뽀똔이와 함께하는 일본 뿌시기',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        signatureImg: '/images/mateSignature.svg',
        title: '뽀똔이와 함께하는 일본 뿌시기',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        signatureImg: '/images/mateSignature.svg',
        title: '뽀똔이와 함께하는 일본 뿌시기',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        signatureImg: '/images/mateSignature.svg',
        title: '뽀똔이와 함께하는 일본 뿌시기',
      },
      {
        imgSrc: '/images/userImg.png',
        nickName: '샐리',
        userId: '@sally',
        signatureImg: '/images/mateSignature.svg',
        title: '뽀똔이와 함께하는 일본 뿌시기',
      },
    ];

    return HttpResponse.json(mates);
  }),
];
