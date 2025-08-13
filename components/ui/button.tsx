"use client";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
};

export function Button({
  className,
  variant = "default",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2";
  const variants: Record<string, string> = {
    default: "bg-black text-white",
    outline: "border border-gray-300 bg-transparent",
    secondary: "bg-gray-100 text-gray-900"
  };
  return (
    <button className={cn(base, variants[variant] || variants.default, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
