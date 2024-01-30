import { create } from 'zustand';

const useTravelModal = create(set => ({
  isOpen: false,

  travelOnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTravelModal;
