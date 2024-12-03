"use client";

import { useEffect, useRef, useState } from "react";

import createSafeContext from "@/lib/react/create-safe-context";
import type { PropsWithChildren } from "@/lib/types";
import debounce from "@/lib/utils/debounce";

import useCallbackRef from "@/hooks/use-callback-ref";
import useCombinedRefs from "@/hooks/use-combined-refs";

/**
  <div className="relative overflow-hidden">
    <Carousel>
      <CarouselSlideList className="no-scrollbar tablet:gap-16 flex cursor-grab gap-8 overflow-x-auto overflow-y-hidden">
        {[
          "/mock.jpg",
          "/mock.jpg",
          "/mock.jpg",
          "/mock.jpg",
          "/mock.jpg",
          "/mock.jpg",
        ].map((image, i) => (
          <CarouselSlide key={i} className="flex-none first:pl-0 last:pr-0">
            <div className="tablet:max-w-384 relative max-h-320 max-w-256 flex-none">
              <img
                src={image}
                alt={`Post image ${i + 1}`}
                className="aspect-[4/3] h-full w-full cursor-pointer rounded-md object-cover"
              />
            </div>
          </CarouselSlide>
        ))}
      </CarouselSlideList>
    </Carousel>
  </div>
 */

const [CarouselProvider, useCarousel] = createSafeContext<{
  slideListRef: React.RefObject<HTMLDivElement>;
}>("useCarousel must be used within a CarouselProvider");

function Carousel({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null);
  const slideListRef = useRef<HTMLDivElement>(null);
  const [_, force] = useState({}); // 강제 리렌더링을 위한 state

  useEffect(() => {
    const slidesList = slideListRef.current;

    if (slidesList) {
      const handleScrollStartAndEnd = debounce(() => force({}), 100);

      slidesList.addEventListener("scroll", handleScrollStartAndEnd);
      window.addEventListener("resize", handleScrollStartAndEnd);

      force({});

      return () => {
        slidesList.addEventListener("scroll", handleScrollStartAndEnd);
        window.addEventListener("resize", handleScrollStartAndEnd);
      };
    }
  }, []);

  return (
    <CarouselProvider value={{ slideListRef }}>
      <div ref={ref}>{children}</div>
    </CarouselProvider>
  );
}

function CarouselSlideList(props: React.ComponentPropsWithoutRef<"div">) {
  const { slideListRef } = useCarousel();
  const ref = useRef<React.ElementRef<"div">>(null);
  const combinedRefs = useCombinedRefs(ref, slideListRef);
  const [dragStart, setDragStart] = useState<null | {
    scrollX: number;
    pointerX: number;
  }>(null);

  const handleMouseMove = useCallbackRef((e: MouseEvent) => {
    if (dragStart && ref.current) {
      const distanceX = e.clientX - dragStart.pointerX;
      ref.current.scrollLeft = dragStart.scrollX - distanceX;
    }
  });

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setDragStart(null);
  });

  return (
    <div
      {...props}
      ref={combinedRefs}
      data-state={dragStart ? "dragging" : undefined}
      // TODO: combined e
      // @see https://github.com/radix-ui/website/blob/main/components/marketing/Carousel.tsx
      onMouseDownCapture={(e) => {
        if (e.target instanceof HTMLInputElement) {
          return;
        }

        // Drag only if main mouse button was clicked
        if (e.button === 0) {
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseup", handleMouseUp);
          setDragStart({
            scrollX: (e.currentTarget as HTMLElement).scrollLeft,
            pointerX: e.clientX,
          });
        }
      }}
      onPointerDown={(e) => {
        if (e.target instanceof HTMLInputElement) {
          return;
        }

        const element = e.target as HTMLElement;
        element.style.userSelect = "none";
        element.setPointerCapture(e.pointerId);
      }}
      onPointerUp={(e) => {
        if (e.target instanceof HTMLInputElement) {
          return;
        }

        const element = e.target as HTMLElement;
        element.style.userSelect = "";
        element.releasePointerCapture(e.pointerId);
      }}
    >
      {props.children}
    </div>
  );
}

function CarouselSlide(props: React.ComponentPropsWithoutRef<"div">) {
  const { slideListRef } = useCarousel();
  const ref = useRef<HTMLDivElement | null>(null);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersectionRatio(entry.intersectionRatio),
      { root: slideListRef.current, threshold: [0, 0.5, 1] },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [slideListRef]);

  return (
    <div
      {...props}
      ref={ref}
      data-slide-intersection-ratio={intersectionRatio}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        isDraggingRef.current = true;
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (isDraggingRef.current) {
          e.preventDefault();
        }
      }}
    >
      {props.children}
    </div>
  );
}

export { Carousel, CarouselSlideList, CarouselSlide };
