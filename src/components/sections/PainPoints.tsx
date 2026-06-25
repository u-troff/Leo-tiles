import { AlertTriangle, Clock, Layers, Droplets, Wrench, DollarSign } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Factory Tiles Lack Character",
    description:
      "Mass-produced tiles look identical. Handmade terracotta develops warmth, variation, and patina that no factory can replicate.",
  },
  {
    icon: Clock,
    title: "Long Lead Times Catch People Off Guard",
    description:
      "Handmade tiles take time. We're upfront about production schedules — contact us early in your project so we can deliver on time.",
  },
  {
    icon: Layers,
    title: "Wrong Installer Ruins the Result",
    description:
      "Non-standard sizing requires specialist installation. Our own team has installed thousands of square metres of our tiles — nobody knows them better.",
  },
  {
    icon: Droplets,
    title: "Unsealed Tiles Stain Permanently",
    description:
      "Terracotta must be sealed correctly before and after grouting. We supply the right sealant and advise on the correct process.",
  },
  {
    icon: Wrench,
    title: "Getting a Custom Size Quote Takes Weeks",
    description:
      "We respond to custom enquiries fast. Tell us your project dimensions and we'll confirm feasibility and pricing quickly.",
  },
  {
    icon: DollarSign,
    title: "Grout That Clashes Visually",
    description:
      "White grout kills the warmth of terracotta. We supply colour-matched grout in natural tones that complement the tile, not fight it.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 lg:py-24 bg-clay-900 relative overflow-hidden">
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
            Tile Problems Solved with
            <br />
            <em className="not-italic text-rust-400">Care and Craft</em>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Honest answers to the issues that trip up most terracotta tile projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group bg-clay-900 p-7 hover:bg-clay-800 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-rust-500/15 flex items-center justify-center mb-5 group-hover:bg-rust-500/25 transition-colors">
                <point.icon className="w-5 h-5 text-rust-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2.5 leading-snug">
                {point.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{point.description}</p>

              {/* Bottom accent */}
              <div className="mt-5 h-px w-0 group-hover:w-8 bg-rust-500 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/get-a-quote" variant="primary" size="lg">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
