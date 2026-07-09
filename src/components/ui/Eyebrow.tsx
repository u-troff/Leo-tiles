interface EyebrowProps {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function Eyebrow({ label, tone = "light", className = "" }: EyebrowProps) {
  return (
    <div
      className={`text-[12.5px] font-bold uppercase tracking-[0.15em] mb-3.5 ${
        tone === "dark" ? "text-rust-300" : "text-stone-600"
      } ${className}`}
    >
      {label}
    </div>
  );
}
