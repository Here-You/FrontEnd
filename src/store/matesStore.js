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

  clearSelectedMates: mateId =>
    set(state => ({
      selectedMates: state.selectedMates.filter(
        selectedMate => selectedMate.id !== mateId,
      ),
    })),
}));

export default useMatesStore;
