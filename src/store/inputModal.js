import { create } from 'zustand';

const inputModal = create(set => ({
  isOpen: false,
  title: '',
  buttonText: '닉네임변경',
  inputType: "",
  onOpen: (val,btn,it) => set({ isOpen: true, title: val, buttonText: btn, inputType: it }),
  onClose: () => set({ isOpen: false }),
}));

export default inputModal;
