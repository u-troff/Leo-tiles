interface EyebrowProps {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function Eyebrow({ label, tone = "light", className = "" }: EyebrowProps) {
  return (
    <div
      className={`label-caps mb-4 ${
        tone === "dark" ? "text-kiln-glow" : "text-primary"
      } ${className}`}
    >
      {label}
    </div>
  );
}
