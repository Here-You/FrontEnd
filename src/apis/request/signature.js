import { axiosWithToken } from '../api';
import { API_BASE, API_URL, VERSION } from '@/constants/path';

//내 시그니처
const getMySignaturePreview = () => {
  const url = `${API_URL.GET_MY_SIGNATURE}`;
  const res = axiosWithToken.get(url);
  return res;
};

//시그니처 발행하기
const postNewSignature = (title, pages) => {
  const url = `${API_URL.PUBLISH_SIGNATURE}`;
  const res = axiosWithToken.post(url, {
    title: title,
    pages: pages,
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
const updateMySignature = (signatureId, title, pages) => {
  const url = `/api/${VERSION}/${API_BASE.SIGNATURE}/${signatureId}`;
  const res = axiosWithToken.patch(url, {
    title: title,
    pages: pages,
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
const likeSignature = (signatureId, liked) => {
  const url = `${API_URL.GET_MY_SIGNATURE}/like/${signatureId}`;
  const res = axiosWithToken.patch(url, {
    liked: liked,
    signatureId: signatureId,
  });
  return res;
};

//시그니처 좋아요 목록
const getLikeList = signatureId => {
  const url = `${API_URL.GET_MY_SIGNATURE}/like/${signatureId}`;
  const res = axiosWithToken.get(url);
  return res;
};

// 시그니처 댓글 / 답글 불러오기 (무한 스크롤)
const getSignatureComments = (signatureId, take, { pageParam }) => {
  const url = `api/v1/signature/${signatureId}/comment?take=${take}&cursorId=${pageParam}`;
  return axiosWithToken.get(url);
};

// 시그니처 댓글 생성
const postSignatureComment = ({ signatureId, content }) => {
  const url = `/api/v1/signature/${signatureId}/comment`;
  return axiosWithToken.post(url, {
    content: content,
  });
};

// 시그니처 답글 생성
const postSignatureReComment = ({ signatureId, parentId, content }) => {
  const url = `/api/v1/signature/${signatureId}/comment/${parentId}`;
  return axiosWithToken.post(url, {
    content: content,
  });
};

// 시그니처 댓글/답글 수정하기
const updateSignatureReComment = ({ signatureId, commentId, content }) => {
  const url = `/api/v1/signature/${signatureId}/comment/${commentId}`;
  console.log(url);
  return axiosWithToken.patch(url, {
    content: content,
  });
};

// 시그니처 댓글/답글 삭제하기
const deleteSignatureReComment = ({ signatureId, commentId }) => {
  const url = `/api/v1/signature/${signatureId}/comment/${commentId}`;

  return axiosWithToken.delete(url);
};

export {
  getMySignaturePreview,
  postNewSignature,
  getDetail,
  updateMySignature,
  deleteMySignature,
  likeSignature,
  getLikeList,
  getSignatureComments,
  postSignatureComment,
  postSignatureReComment,
  updateSignatureReComment,
  deleteSignatureReComment,
};
