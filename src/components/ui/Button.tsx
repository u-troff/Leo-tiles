import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  arrow = false,
}: ButtonProps) {
  // Sharp corners, no shadows, architectural precision.
  const base =
    "group inline-flex items-center justify-center label-caps rounded-none transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-clay-deep focus-visible:ring-offset-2 focus-visible:ring-offset-warm-linen";

  const variants = {
    primary: "bg-clay-deep text-warm-linen hover:bg-primary",
    secondary: "bg-charcoal-ash text-warm-linen hover:bg-primary",
    outline:
      "border border-charcoal-ash text-charcoal-ash hover:bg-charcoal-ash hover:text-warm-linen",
  };

  const sizes = {
    sm: "px-6 py-3",
    md: "px-8 py-4",
    lg: "px-10 py-5",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
