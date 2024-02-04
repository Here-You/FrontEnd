import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const PreviewHandlers2 = [
  http.get(`${baseURL}${API_PATH.SIGNATURE_PREVIEW}`, (req, res, ctx) => {
    const previewData = [
      {
        id: 1,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        location: '리라쿠마 카페,긴자',
        page: [
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://imgbb.com/"><img src="https://i.ibb.co/HC30wRn/3.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
        ],
      },
      {
        id: 2,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        location: '리라쿠마 카페,긴자',
        page: [
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },

          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
        ],
      },
      {
        id: 3,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        location: '리라쿠마 카페,긴자',
        page: [
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://imgbb.com/"><img src="https://i.ibb.co/HC30wRn/3.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
        ],
      },
      {
        id: 4,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        location: '리라쿠마 카페,긴자',
        page: [
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://imgbb.com/"><img src="https://i.ibb.co/HC30wRn/3.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
        ],
      },
      {
        id: 5,
        userImgUrl: 'https://i.ibb.co/JdGMYqf/Group-1000000912.png',
        date: '23 / 10 / 11',
        title: '우리 동글이와 함꼐한, 강릉 1박 2일',
        location: '리라쿠마 카페,긴자',
        page: [
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://imgbb.com/"><img src="https://i.ibb.co/HC30wRn/3.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/7NvFkWV/Kakao-Talk-20230913-173120131-03.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/2ZYxn1X/Kakao-Talk-20231203-204945606.png',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
          {
            img: 'https://i.ibb.co/N2pXGXF/Kakao-Talk-20230920-192330737.jpg',
            content:
              '초등학교때부터 가고싶었던 리라쿠마 카페를 다녀왔어요. 뽀똔이가 살짝 질투를 하는 것 같지만..? 무시해줍니다',
          },
        ],
      },
    ];
    return HttpResponse.json(previewData);
  }),
];
