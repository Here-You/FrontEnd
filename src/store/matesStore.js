import create from 'zustand';

const useMatesStore = create(set => ({
  selectedMates: [],

  addSelectedMate: mate =>
    set(state => ({
      selectedMates: [
        ...state.selectedMates.filter(
          selectedMate => selectedMate.id !== mate.id,
        ),
        mate,
      ],
    })),

  removeSelectedMate: mateId =>
    set(state => ({
      selectedMates: state.selectedMates.filter(
        selectedMate => selectedMate.id !== mateId,
      ),
    })),

  clearSelectedMates: () => set({ selectedMates: [] }),
}));

export default useMatesStore;
