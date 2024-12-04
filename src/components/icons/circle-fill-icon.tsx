import type { IconProps } from "@/lib/types";

export default function CircleFillIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg aria-hidden height={size} width={size} viewBox="0 0 256 256" fill="currentColor" {...rest}>
      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
    </svg>
  );
}
