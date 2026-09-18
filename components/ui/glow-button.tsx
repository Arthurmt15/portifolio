"use client";
import { cn } from "@/lib/utils";

export function GlowButton({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-[14px] text-sm font-medium transition-all duration-300 overflow-hidden group",
        variant === "primary" &&
          "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,214,0.4)] hover:shadow-[0_0_30px_rgba(6,182,214,0.6),0_0_60px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98]",
        variant === "secondary" &&
          "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 backdrop-blur",
        variant === "ghost" &&
          "text-zinc-400 hover:text-white",
        className
      )}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
