import { updateNickName } from '@/apis/request/profile';

export const useUpdateNickName = async () => {
  const res = await updateNickName();

  const data =res.data.data;

  return data;
};
