"use client";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium";
  const variants: Record<string, string> = {
    default: "bg-black text-white",
    outline: "border border-gray-300 bg-transparent",
    secondary: "bg-gray-100 text-gray-900"
  };
  const sizes: Record<string, string> = {
    sm: "text-xs h-8 px-3 py-1.5",
    md: "text-sm h-10 px-4 py-2",
    lg: "text-base h-12 px-6 py-3"
  };
  return (
    <button className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.md, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
