import { create } from 'zustand';

const editModal = create(set => ({
  isOpen: false,

  onOpens: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default editModal;
