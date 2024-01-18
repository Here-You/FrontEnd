import { create } from 'zustand';

const imageStore = create(set => ({
  uploadImgUrl: '',
  setUploadImgUrl: newUrl => set({ uploadImgUrl: newUrl }),
}));
export default imageStore;
