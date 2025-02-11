function throttle<T = unknown>(
  callback: (...args: T[]) => void,
  timeout = 200
) {
  let cleanup: ReturnType<typeof setTimeout> | null = null;

  return (...args: T[]) => {
    if (!cleanup) {
      cleanup = setTimeout(() => {
        callback(...args);
        cleanup = null;
      }, timeout);
    }
  };
}

export default throttle;
