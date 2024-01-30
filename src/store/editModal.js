import { create } from 'zustand';

const editModal = create(set => ({
  isOpen: false,
  title: '',
  buttonText: '',
  secondTitle: '',
  onOpens: (val, btn, sec) => set({ isOpen: true, title: val, buttonText: btn,secondTitle: sec }),
  onClose: () => set({ isOpen: false }),
}));

export default editModal;
