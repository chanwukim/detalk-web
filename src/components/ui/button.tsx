import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/lib/cn";

const buttonVariants = cva(
  "relative inline-flex cursor-pointer items-center justify-center gap-8 border border-transparent text-sm font-medium whitespace-nowrap transition-all select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-foreground-on-primary inset-shadow-lg hover:bg-primary/80 active:bg-primary shadow-md inset-shadow-white/20",
        outline: "border-border bg-background active:bg-accent shadow-xs hover:shadow-sm",
        light:
          "bg-primary/10 text-primary shadow-primary/10 hover:bg-primary/20 active:bg-primary/30 shadow-sm",
        ghost: "hover:bg-accent/70 active:bg-accent",
      },
      size: {
        sm: "h-32 px-12 text-xs",
        md: "h-36 px-16",
        lg: "h-40 px-24",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, rounded, loading, asChild, children, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (loading) {
      return (
        <Comp
          disabled
          ref={ref}
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          {...rest}
        >
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="absolute animate-spin"
            >
              <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
            </svg>
            {children}
          </>
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
