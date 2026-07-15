import Eyebrow from "@/components/ui/Eyebrow";

const problems = [
  {
    title: "Factory Tiles Lack Character",
    description:
      "Mass-produced tiles look identical. Handmade terracotta develops warmth, variation, and patina that no factory can replicate.",
  },
  {
    title: "Long Lead Times Catch People Off Guard",
    description:
      "Handmade tiles take time. We're upfront about production schedules, contact us early in your project so we can deliver on time.",
  },
  {
    title: "The Wrong Installer Ruins the Result",
    description:
      "Non-standard sizing requires specialist installation. Our own team has laid thousands of square metres of our tiles, nobody knows them better.",
  },
  {
    title: "Unsealed Tiles Stain Permanently",
    description:
      "Terracotta must be sealed correctly before and after grouting. We supply the right sealant and advise on the correct process.",
  },
  {
    title: "Custom-Size Quotes That Take Weeks",
    description:
      "We respond to custom enquiries fast. Tell us your project dimensions and we'll confirm feasibility and pricing quickly.",
  },
  {
    title: "Grout That Clashes Visually",
    description:
      "White grout kills the warmth of terracotta. We supply colour-matched grout in natural tones that complement the tile, not fight it.",
  },
];

export default function ProblemsSolved() {
  return (
    <section className="py-24 lg:py-40 bg-sand-bone">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <Eyebrow label="Common Problems, Solved" />
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash">
            Tile problems solved with care and craft.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {problems.map((item) => (
            <div key={item.title} className="border-t border-mortar-gray/30 pt-6">
              <h3 className="font-display text-2xl text-charcoal-ash mb-3">{item.title}</h3>
              <p className="text-secondary text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
