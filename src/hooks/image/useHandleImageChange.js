import imageCompression from 'browser-image-compression';

const useHandleImageChange = (currentPageIndex, updatePage) => {
  return async function handleImageChange(e) {
    const file = e.target.files[0];

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const compressedFile = await imageCompression(file, {
          maxWidthOrHeight: 800,
          maxSizeMB: 2,
          fileType: 'image/jpeg',
        });

        const compressedReader = new FileReader();

        compressedReader.onloadend = () => {
          const base64Image = compressedReader.result.split(',')[1];
          updatePage(currentPageIndex, { image: base64Image });
        };

        compressedReader.readAsDataURL(compressedFile);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('이미지 압축 실패:', error);
    }
  };
};

export default useHandleImageChange;
