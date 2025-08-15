export const isSafeAppIframe = () => {
  return typeof window !== 'undefined' && window.parent !== window;
};
