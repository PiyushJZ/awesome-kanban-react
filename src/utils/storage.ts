export const setStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const deleteStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};
