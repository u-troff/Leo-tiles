import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon, slug, className }: ServiceCardProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] ||
    LucideIcons.Wrench;

  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group bg-white border border-stone-300 p-6 transition-all duration-300",
        "hover:border-rust-500 hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
    >
      {/* Icon row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 bg-rust-50 flex items-center justify-center group-hover:bg-rust-100 transition-colors">
          <IconComponent className="w-5 h-5 text-rust-500" />
        </div>
        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-rust-500 transition-colors mt-0.5" />
      </div>

      <h3 className="font-semibold text-clay-800 mb-2 text-base group-hover:text-rust-600 transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{description}</p>

      {/* Bottom rule, grows on hover */}
      <div className="mt-5 h-px bg-stone-300 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-rust-500 transition-all duration-300" />
      </div>
    </Link>
  );
}
