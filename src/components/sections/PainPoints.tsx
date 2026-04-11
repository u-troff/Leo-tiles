import { Droplets, AlertTriangle, Clock, DollarSign, Wrench, Gauge } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";

const painPoints = [
  {
    icon: Droplets,
    title: "Leaky Pipes & Persistent Drips",
    description:
      "Hidden leaks cause mold, structural damage, and inflated water bills. We find and fix leaks fast.",
  },
  {
    icon: AlertTriangle,
    title: "Clogged Drains & Sewer Backups",
    description:
      "Recurring clogs and sewage backups create health hazards and unpleasant living conditions.",
  },
  {
    icon: Clock,
    title: "Delays in Emergency Repairs",
    description:
      "When a pipe bursts at 2 AM, you need a plumber who answers. Our 24/7 team responds fast.",
  },
  {
    icon: DollarSign,
    title: "Unclear Pricing or Hidden Fees",
    description:
      "We provide transparent, upfront pricing before starting any work. No surprises on your bill.",
  },
  {
    icon: Wrench,
    title: "Outdated or Failing Water Heaters",
    description:
      "Cold showers and rising energy bills signal it is time for a professional water heater solution.",
  },
  {
    icon: Gauge,
    title: "Low Water Pressure Throughout Home",
    description:
      "Low pressure affects every faucet and shower. We diagnose the root cause and restore full flow.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 lg:py-24 bg-navy-900 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Common Problems" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Plumbing Problems Fixed with
            <br />
            <em className="not-italic text-orange-400">Care and Excellence</em>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Safe, efficient, and lasting solutions to all your plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group bg-navy-900 p-7 hover:bg-navy-800 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-orange-500/15 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 transition-colors">
                <point.icon className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2.5 leading-snug">
                {point.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{point.description}</p>

              {/* Bottom accent */}
              <div className="mt-5 h-px w-0 group-hover:w-8 bg-orange-500 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact-us" variant="primary" size="lg">
            Fix My Plumbing Issue
          </Button>
        </div>
      </div>
    </section>
  );
}
