import { create } from 'zustand';

const useIntroModal = create(set => ({
  isOpen: false,

  introOnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useIntroModal;
