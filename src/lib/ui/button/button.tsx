import React, { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "filled";
  title: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className, title, ...props }, ref) => {
    const baseStyles = "py-3 px-10 text-tomato-bold lg:text-[16px] text-[13px] rounded focus:outline-none";
    const variantStyles = {
      solid: "bg-teal-1 text-primary-100 lg:text-[16px] text-[13px] font-tomato-semibold",
      filled: "bg-teal-3 text-black-2lg:text-[16px] text-[13px] font-tomato-semibold",
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {title}
      </button>
    );
  }
);

export default Button;
