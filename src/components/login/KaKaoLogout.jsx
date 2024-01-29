import axios from "axios";

export const kakaoLogout = accessToken => {
  axios({
    method: 'POST',
    url: 'https://kapi.kakao.com/v1/user/logout',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(() => {
      window.location.href = '/login/oauth';
    })
    .catch(e => {
      console.log("토큰 없음");
      // 이미 만료된 토큰일 경우
      if (e.response.data.code === -401) {
        window.location.href = '/';
      }
    });
};
