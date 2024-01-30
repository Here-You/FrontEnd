import { create } from 'zustand';

const useNickNameModal = create(set => ({
  isOpen: false,

  nickNameOnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNickNameModal;
