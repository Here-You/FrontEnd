import { updateIntro } from '@/apis/request/profile';

export const useUpdateIntro= async intro => {
  const res = await updateIntro(intro);

  if (res.status === 200) {
    console.log(res.data);
    return res.data;
  } else {
    throw new Error(`Failed to update nickname. Status: ${res.status}`);
  }
};
