interface SectionLogoProps {
  label?: string;
  align?: "left" | "center";
}

export default function SectionLogo({
  label = "Leo Tiles",
  align = "left",
}: SectionLogoProps) {
  return (
    <div className={`label-caps text-primary mb-4 ${align === "center" ? "text-center" : ""}`}>
      {label}
    </div>
  );
}
