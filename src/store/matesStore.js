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
  clearSelectedMates: () => set({ selectedMates: [] }),
}));

export default useMatesStore;
