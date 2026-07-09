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
      "Handmade tiles take time. We're upfront about production schedules — contact us early in your project so we can deliver on time.",
  },
  {
    title: "Wrong Installer Ruins the Result",
    description:
      "Non-standard sizing requires specialist installation. Our own team has installed thousands of square metres of our tiles — nobody knows them better.",
  },
  {
    title: "Unsealed Tiles Stain Permanently",
    description:
      "Terracotta must be sealed correctly before and after grouting. We supply the right sealant and advise on the correct process.",
  },
  {
    title: "Getting a Custom Size Quote Takes Weeks",
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
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <Eyebrow label="Common Problems" />
        <h2 className="text-3xl lg:text-4xl font-bold text-clay-900 mb-12 max-w-2xl leading-tight">
          Tile problems solved with care and craft
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {problems.map((item) => (
            <div key={item.title}>
              <div className="text-clay-900 text-lg font-bold mb-2">{item.title}</div>
              <p className="text-stone-700 text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
