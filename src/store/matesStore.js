import create from 'zustand';

const useMatesStore = create(set => ({
  selectedMates: [],

  addSelectedMate: mate =>
    set(state => ({
      selectedMates: [
        ...state.selectedMates.filter(
          selectedMate => selectedMate._id !== mate._id,
        ),
        mate,
      ],
    })),

  clearSelectedMates: mateId =>
    set(state => ({
      selectedMates: state.selectedMates.filter(
        selectedMate => selectedMate._id !== mateId,
      ),
    })),
}));

export default useMatesStore;
