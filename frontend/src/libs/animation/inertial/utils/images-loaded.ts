/**
 * 画像読み込み待ち
 * @param {Image} img
 */
const watchImageLoaded = (img: HTMLImageElement) => {
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
};

/**
 * element内の画像読み込み待ち
 * @param {HTMLElement} element
 */
const imagesLoaded = async (element: HTMLElement, cb: () => void) => {
  const unloadedImageArr = [...element.querySelectorAll('img')].filter((img) => !img.complete);
  if (unloadedImageArr.length === 0) return;

  const promiseArr = unloadedImageArr.map((img) => watchImageLoaded(img).then(cb));
  await Promise.all(promiseArr);
};

export { imagesLoaded };
