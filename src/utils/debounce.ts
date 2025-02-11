function debounce<T = unknown>(
  callback: (...args: T[]) => void,
  timeout = 200
) {
  let cleanup: ReturnType<typeof setTimeout>;

  return (...args: T[]) => {
    // 타이머 정리
    clearTimeout(cleanup);

    // 타이머 설정
    cleanup = setTimeout(() => callback(...args), timeout);
  };
}

export default debounce;
