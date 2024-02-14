import { create } from 'zustand';

const useAuth = create(set => ({
  isLogin: false,
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
