import { forwardRef } from "react";

import cn from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon: LeftIcon, className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {LeftIcon && (
          <div className="text-foreground-muted/80 pointer-events-none absolute top-1/2 left-8 -translate-y-1/2">
            {LeftIcon}
          </div>
        )}
        <div>
          <input
            type={type}
            className={cn(
              "file:text-foreground placeholder:text-foreground-muted flex h-36 w-full rounded-md border bg-transparent px-12 py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              LeftIcon && "pl-32",
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
