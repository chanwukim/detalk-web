import type { IconProps } from "@/lib/types";

export default function ArrowLeftIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg aria-hidden height={size} width={size} viewBox="0 0 256 256" fill="currentColor" {...rest}>
      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
    </svg>
  );
}