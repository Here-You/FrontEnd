import { create } from 'zustand';

const editModal = create(set => ({
  isOpen: false,
  modalNum: 0,
  onOpen: val => set({ isOpen: true, modalNum: val }),
  onClose: () => set({ isOpen: false }),
}));

export default editModal;
