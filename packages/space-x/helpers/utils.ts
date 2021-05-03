export const setLocalStoreKey = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getLocalStoreKey = (key: string): string => {
  return localStorage.getItem(key);
};
