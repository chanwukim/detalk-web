import { useCallback } from "react";

type PossibleRef<T> = React.Ref<T> | null;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  // - Callback ref - <element ref={callbackFn} />
  // - ForwardRef callback - forwardRef((props, ref) => {})
  if (typeof ref === "function") {
    ref(value);
  }
  // - useRef()
  // - createRef()
  else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/**
 * 여러 개의 ref를 하나로 합칩니다.
 * @param refs - ref 배열
 * @returns 모든 ref에 DOM 노드를 설정하는 함수를 반환
 *
 * @example
 * const combinedRef = composeRefs(ref1, ref2, ref3);
 * <div ref={combinedRef}></div>
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  // node는 실제 DOM 엘리먼트
  // 전달받은 모든 ref에 대해 setRef 함수를 호출하여 DOM 엘리먼트를 설정
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

/**
 * 여러 ref를 하나로 합쳐주는 React 훅
 * @param refs - ref 배열
 * @returns 합쳐진 ref 반환
 */
export default function useCombinedRefs<T>(...refs: PossibleRef<T>[]) {
  // refs 배열이 변경될 때마다 새로운 콜백을 생성
  return useCallback(composeRefs(...refs), refs);
}
