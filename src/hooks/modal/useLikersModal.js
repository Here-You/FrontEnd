import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const useLikersModal = create()(
  devtools(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })),
);

export default useLikersModal;
