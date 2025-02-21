import { useState, useEffect, useMemo, useCallback } from 'react';

// 스토리지 데이터 읽기
const getStorage = <T>(key: string, storage = localStorage) => {
  const storageData = storage.getItem(key);
  return storageData ? (JSON.parse(storageData) as T) : undefined;
};

// 스토리지 데이터 쓰기
const setStorage = <T>(key: string, value: T, storage = localStorage) => {
  storage.setItem(key, JSON.stringify(value));
};

// 스토리지 데이터 제거
const removeStorage = (key: string, storage = localStorage) => {
  storage.removeItem(key);
};

function usePersist<T>(
  key: string,
  initialValue?: T,
  { changeOnSave = false, storage = localStorage } = {}
) {
  const [data, setData] = useState<T | undefined>(
    () => getStorage(key, storage) ?? initialValue
  );

  useEffect(() => {
    if (changeOnSave) setStorage(key, data);
  }, [key, data, changeOnSave, storage]);

  const saveToStorage = useCallback(
    (value: T) => setStorage(key, value, storage),
    [key, storage]
  );

  const removeInStorage = useMemo(
    () => () => removeStorage(key, storage),
    [key, storage]
  );

  return {
    data,
    setData,
    saveToStorage,
    removeInStorage,
  };
}

export default usePersist;
