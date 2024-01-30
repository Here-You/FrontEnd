import { create } from 'zustand';

const useLogOutModal = create(set => ({
  isOpen: false,

  LogOutOnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLogOutModal;
