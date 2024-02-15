// useSignatureWrite.js
import toast from 'react-hot-toast';
import create from 'zustand';

const useSignatureWrite = create(set => ({
  title: '',
  pages: [],
  currentPageIndex: 0,
  resetData: () =>
    set(() => ({
      title: '',
      pages: [],
      currentPageIndex: 0,
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
  removePage: pageIndex =>
    set(state => {
      const updatedPages = state.pages
        .filter((_, index) => index !== pageIndex)
        .map(page => ({
          ...page,
          page: page.page > pageIndex ? page.page - 1 : page.page,
        }));

      const updatedPageIndex =
        state.currentPageIndex >= updatedPages.length
          ? updatedPages.length - 1
          : state.currentPageIndex;

      return {
        pages: updatedPages,
        currentPageIndex: updatedPageIndex,
      };
    }),
  goToPreviousPage: () => {
    set(state => ({
      currentPageIndex:
        state.currentPageIndex > 0 ? state.currentPageIndex - 1 : 0,
    }));
  },
  goToNextPage: (isImage, isContent, isLocation) => {
    if (!isImage || !isContent || !isLocation) {
      toast('모든 페이지 정보를 입력하세요!');
      return;
    } else {
      set(state => ({
        currentPageIndex:
          state.currentPageIndex < state.pages.length - 1
            ? state.currentPageIndex + 1
            : state.currentPageIndex,
      }));
    }
  },
  updateTitle: newTitle => set({ title: newTitle }),
  updatePage: (pageIndex, newData) =>
    set(state => {
      const newPages = [...state.pages];
      newPages[pageIndex] = { ...newPages[pageIndex], ...newData };
      return { pages: newPages };
    }),
}));

export default useSignatureWrite;
