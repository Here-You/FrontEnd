import { postSnsLogin } from '@/apis/request/profile';
import TokenErrorPage from '@/pages/signature/TokenErrorPage';

export const usePostSnsLogin = async (type, token) => {
  const res = await postSnsLogin(type, token);

  if (res.status === 200) {
    console.log(res.data);
    return res.data;
  } else {
    throw new Error(`Failed to update nickname. Status: ${res.status}`);
  }
};
