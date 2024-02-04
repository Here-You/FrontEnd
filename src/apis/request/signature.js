import { axios, axiosWithToken } from '../api';
import { API_PATH, API_URL } from '@/constants/path';

//내 시그니처
const getMySignaturePreview = () => {
  const url = `${API_URL.GET_MY_SIGNATURE}`;
  const res = axiosWithToken.get(url);
  return res;
};

//시그니처 발행하기
const postNewSignature = ({ postData }) => {
  const { title, pages, content, location, page, image } = postData;
  const url = `${API_URL.PUBLISH_SIGNATURE}`;
  const res = axiosWithToken.post(url, {
    title: title,
    pages: pages,
    content: content,
    location: location,
    page: page,
    image: image,
  });
  return res;
};

//시그니처 상세보기
const getDetail = signatureId => {
  const url = `${API_URL.GET_MY_SIGNATURE}/${signatureId}`;
  const res = axiosWithToken.get(url);
  return res;
};

//시그니처 수정하기
const updateMySignature = (signatureId, { patchData }) => {
  const { title, pages, content, location, page, image } = patchData;
  const url = `${API_URL.GET_MY_SIGNATURE}/${signatureId}`;
  const res = axiosWithToken.patch(url, {
    title: title,
    pages: pages,
    content: content,
    location: location,
    page: page,
    image: image,
  });
  return res;
};

//시그니처 삭제하기
const deleteMySignature = signatureId => {
  const url = `${API_URL.GET_MY_SIGNATURE}/${signatureId}`;
  const res = axiosWithToken.delete(url);
  return res;
};

//시그니처 좋아요, 좋아요 취소
const likeSignature = signatureId => {
  const url = `${API_URL.GET_MY_SIGNATURE}/like/${signatureId}`;
  const res = axiosWithToken.patch(url);
  return res;
};

//시그니처 좋아요 목록
const getLikeList = signatureId => {
  const url = `${API_URL.GET_MY_SIGNATURE}/${signatureId}/like`;
  const res = axiosWithToken.get(url);
  return res;
};

export {
  getMySignaturePreview,
  postNewSignature,
  getDetail,
  updateMySignature,
  deleteMySignature,
  likeSignature,
  getLikeList,
};
