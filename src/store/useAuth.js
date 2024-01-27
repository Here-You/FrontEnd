import { create } from 'zustand';

const useAuth = create(set => ({
  isLogin: false,
  login: token => {
    localStorage.setItem('token', token);
    set({ isLogin: true });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ isLogin: false });
  },
}));

export default useAuth;
