import { create } from 'zustand';

const editModal = create(set => ({
  isOpen: false,
  modalName: '',
  modalId: 0,
  onOpen: (val, num) => set({ isOpen: true, modalName: val, modalId: num }),
  onClose: () => set({ isOpen: false }),
}));

export default editModal;
