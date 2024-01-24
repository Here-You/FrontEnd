// useSignatureWrite.js
import create from 'zustand';

const useSignatureWrite = create(set => ({
  title: '',
  pages: [{}],
  currentPageIndex: 0,
  addPage: () =>
    set(state => ({
      pages: [...state.pages, { position: '', content: '', photo: null }],
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

export default useSignatureWrite;
