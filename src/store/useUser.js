import create from 'zustand';

import { persist } from 'zustand/middleware';

const useUser = create(
  persist(
    set => ({
      information: [],
      userInfo: {
        email: '',
        pw: '',
        checkPw: '',
        nickname: '',
        introduction: '',
      },
      setUserInfo: user =>
        set(state => ({ userInfo: { ...state.userInfo, ...user } })),
      resetInformation: () => set({ information: [] }),
      addInformation: data =>
        set(state => ({ information: [...state.information, data] })),
    }),
    {
      name: 'user-store',
    },
  ),
);

export default useUser;
