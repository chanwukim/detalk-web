import { useRef } from "react";

import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useCombinedRefs from "./use-combined-refs";

describe("useCombinedRefs", () => {
  it("객체형 ref에 값이 할당된다.", () => {
    // given
    const objRef: { current: HTMLDivElement | null } = { current: null };

    // when
    const { result } = renderHook(() => useCombinedRefs(objRef));
    const setRef = result.current;
    const divElement = document.createElement("div");
    setRef(divElement);

    // then
    expect(objRef.current).toBe(divElement);
  });

  it("함수형 ref가 호출된다.", () => {
    // given
    const functionRef = vi.fn();

    // when
    const { result } = renderHook(() => useCombinedRefs(functionRef));
    const setRef = result.current;
    const divElement = document.createElement("div");
    setRef(divElement);

    // then
    expect(functionRef).toHaveBeenCalledWith(divElement);
  });

  it("useRef와 함께 사용할 수 있다.", () => {
    // given
    const { result } = renderHook(() => {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useRef<HTMLDivElement>(null);
      const combinedRef = useCombinedRefs(ref1, ref2);

      return { ref1, ref2, combinedRef };
    });

    // when
    const divElement = document.createElement("div");
    result.current.combinedRef(divElement);

    // then
    expect(result.current.ref1.current).toBe(divElement);
    expect(result.current.ref2.current).toBe(divElement);
  });

  it("null ref를 전달 했을 때 에러가 발생하지 않는다.", () => {
    // given
    const objRef: { current: HTMLDivElement | null } = { current: null };

    // when
    const { result } = renderHook(() => useCombinedRefs<HTMLDivElement>(null, objRef));
    const setRef = result.current;
    const divElement = document.createElement("div");

    // then
    expect(() => setRef(divElement)).not.toThrow();
    expect(objRef.current).toBe(divElement);
  });
});
