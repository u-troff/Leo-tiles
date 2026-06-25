import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-none";

  const variants = {
    primary:
      "bg-rust-500 text-white hover:bg-rust-600 focus:ring-rust-500 shadow-md hover:shadow-lg hover:-translate-y-px",
    secondary:
      "bg-clay-800 text-white hover:bg-clay-900 focus:ring-clay-800 shadow-md hover:shadow-lg hover:-translate-y-px",
    outline:
      "border border-rust-500 text-rust-500 hover:bg-rust-500 hover:text-white focus:ring-rust-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
