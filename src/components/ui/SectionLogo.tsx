interface SectionLogoProps {
  label?: string;
  align?: "left" | "center";
}

export default function SectionLogo({
  label = "Acme Plumbing",
  align = "left",
}: SectionLogoProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-5 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <div className="h-px w-8 bg-orange-500 flex-shrink-0" />
      <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap">
        {label}
      </span>
      <div className="h-px w-8 bg-orange-500 flex-shrink-0" />
    </div>
  );
}
