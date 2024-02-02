import create from 'zustand';

const useModalScrollPrevention = create(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModalScrollPrevention;
