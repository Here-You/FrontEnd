import { updateNickName } from '@/apis/request/profile';

export const useUpdateNickName = async nickname => {
  const res = await updateNickName(nickname);

  if (res.status === 200) {
    console.log(res.data);
    return res.data;
  } else {
    throw new Error(`Failed to update nickname. Status: ${res.status}`);
  }
};
