import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';

const JSONStorage = createJSONStorage(localStorage);

const useAuth = create(
  persist(
    set => ({
      isLogin: false,
      login: token => {
        set({ isLogin: true });
        localStorage.setItem('x-access-token', token);
      },
      logout: () => {
        set({ isLogin: false });
        localStorage.removeItem('x-access-token');
      },
      revoke: () => {
        set({ isLogin: false });
        localStorage.removeItem('x-access-token');
      },
    }),
    {
      name: 'authState',
      getStorage: () => JSONStorage,
    },
  ),
);

export default useAuth;
