import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const useJourneyWriteModal = create()(
  devtools(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })),
);

export default useJourneyWriteModal;
