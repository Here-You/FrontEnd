import create from 'zustand';

const useSignatureEdit = create(set => ({
  title: '',
  pages: [],
  currentPageIndex: 0,
  setPage: newPages =>
    set(state => ({
      pages: newPages.map((page, index) => ({
        ...page,
      })),
    })),
  addTitle: newTitle =>
    set(state => ({
      title: newTitle,
    })),
  addPage: () =>
    set(state => ({
      pages: [
        ...state.pages,
        {
          location: '',
          content: '',
          image: null,
          page: state.pages.length + 1,
        },
      ],
      currentPageIndex: state.pages.length,
    })),
  removePage: () =>
    set(state => ({
      pages: state.pages.length > 1 ? state.pages.slice(0, -1) : state.pages,
      currentPageIndex: state.pages.length > 1 ? state.currentPageIndex - 1 : 0,
    })),
  goToPreviousPage: () =>
    set(state => ({
      currentPageIndex:
        state.currentPageIndex > 0 ? state.currentPageIndex - 1 : 0,
    })),
  goToNextPage: () =>
    set(state => ({
      currentPageIndex:
        state.currentPageIndex < state.pages.length - 1
          ? state.currentPageIndex + 1
          : state.currentPageIndex,
    })),
  updateTitle: newTitle => set({ title: newTitle }),
  updatePage: (pageIndex, newData) =>
    set(state => {
      const newPages = [...state.pages];
      newPages[pageIndex] = { ...newPages[pageIndex], ...newData };
      return { pages: newPages };
    }),
}));

export default useSignatureEdit;
