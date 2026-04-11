interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center px-4 py-6 group">
      {/* Giant serif step number */}
      <div className="relative mb-5">
        <span
          className="font-serif text-[80px] leading-none font-bold text-orange-500/15 select-none"
          aria-hidden="true"
        >
          {String(number).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-3xl font-bold text-orange-500">
            {String(number).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Decorative rule */}
      <div className="w-8 h-px bg-orange-500/40 mb-4" />

      <h3 className="text-lg font-semibold text-navy-800 mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
