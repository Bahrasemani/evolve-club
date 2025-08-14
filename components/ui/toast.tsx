"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: "default" | "destructive";
  duration?: number;
};

export type ToastActionElement = React.ReactNode;

export function Toast({
  className,
  children,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & ToastProps) {
  return (
    <div
      className={cn(
        "rounded-md border p-4 shadow-sm bg-background text-foreground",
        variant === "destructive" && "border-red-500 bg-red-50 text-red-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ToastTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("font-semibold", className)} {...props} />;
}

export function ToastDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function ToastAction({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("ml-auto text-sm underline", className)} {...props} />;
}

export function Toaster({ toasts = [] as Array<{ id: string; title?: React.ReactNode; description?: React.ReactNode; action?: ToastActionElement; open?: boolean; onOpenChange?: (open: boolean) => void; variant?: "default" | "destructive" }> }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <Toast key={t.id} open={t.open} onOpenChange={t.onOpenChange} variant={t.variant}>
          {t.title && <ToastTitle>{t.title}</ToastTitle>}
          {t.description && <ToastDescription>{t.description}</ToastDescription>}
          {t.action}
        </Toast>
      ))}
    </div>
  );
}