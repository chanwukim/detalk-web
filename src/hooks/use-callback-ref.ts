import { useEffect, useMemo, useRef } from "react";

export default function useCallbackRef<T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T | undefined,
): T {
  const callbackRef = useRef(callback);

  // callback이 변경될 때마다 ref 업데이트
  useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
