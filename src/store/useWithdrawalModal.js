import { create } from 'zustand';

const useWithdrawalModal = create(set => ({
  isOpen: false,

  WithdrawalOnOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWithdrawalModal;
