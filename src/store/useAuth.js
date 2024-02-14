import { create } from 'zustand';

import { getAuthToken } from '@/utils/auth';

const useAuth = create(set => ({
  isLogin: getAuthToken() ? true : false,
  login: token => {
    localStorage.setItem('x-access-token', token);
    set({ isLogin: true });
  },
  logout: () => {
    localStorage.removeItem('x-access-token');
    set({ isLogin: false });
  },
  revoke: () => {
    localStorage.removeItem('x-access-token');
    set({ isLogin: false });
  },
}));

export default useAuth;
