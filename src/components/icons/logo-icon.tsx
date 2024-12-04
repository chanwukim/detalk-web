import type { IconProps } from "@/lib/types";

export default function LogoIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      height={size}
      width={size}
      aria-hidden
      {...rest}
    >
      <rect x="2" y="2" width="20" height="20" rx="10" />
      <path d="M7.85714 22C4.62233 22 2 19.3777 2 16.1429L2 7.85714C2 4.62233 4.62233 2 7.85714 2L12 2L12 22L7.85714 22Z" />
      <path d="M7.71429 22C4.55837 22 2 19.4416 2 16.2857L2 7.71429C2 4.55837 4.55837 2 7.71429 2L12 2L12 22L7.71429 22Z" />
    </svg>
  );
}
