"use client";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
};

export default function Button({
  className,
  variant = "default",
  children,
  ...props
}: PropsWithChildren<Props>) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2";
  const variants = {
    default: "bg-black text-white",
    outline: "border border-gray-300 bg-transparent",
    secondary: "bg-gray-100 text-gray-900"
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}