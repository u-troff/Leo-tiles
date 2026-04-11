import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

const galleryItems = [
  { id: 1, label: "Kitchen Sink Installation", category: "Residential" },
  { id: 2, label: "Bathroom Remodel Plumbing", category: "Residential" },
  { id: 3, label: "Water Heater Replacement", category: "Residential" },
  { id: 4, label: "Sewer Line Repair", category: "Residential" },
  { id: 5, label: "Commercial Drain Cleaning", category: "Commercial" },
  { id: 6, label: "Pipe Repiping Project", category: "Residential" },
  { id: 7, label: "Emergency Pipe Repair", category: "Emergency" },
  { id: 8, label: "Tankless Water Heater Install", category: "Residential" },
];

const categoryColors: Record<string, string> = {
  Residential: "bg-orange-500",
  Commercial: "bg-navy-700",
  Emergency: "bg-red-600",
};

export default function WorkGallery() {
  return (
    <section className="py-16 lg:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Our Work" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-3 leading-tight">
            Our Work Speaks for Itself
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Browse real-world examples of our completed projects — every job reflects our
            commitment to quality workmanship and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-cream-300">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-navy-100 aspect-square cursor-pointer overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <div>
                  <p className="text-navy-500 font-medium text-sm">{item.label}</p>
                  <p className="text-navy-400 text-xs mt-1">Project Photo</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/75 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className={`inline-block text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 mb-2 ${
                      categoryColors[item.category] ?? "bg-orange-500"
                    }`}
                  >
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
