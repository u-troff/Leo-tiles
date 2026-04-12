import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

const galleryItems = [
  {
    id: 1,
    label: "Kitchen Sink Installation",
    category: "Residential",
    image: "https://images.pexels.com/photos/18185916/pexels-photo-18185916.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Elegant modern kitchen faucet on marble countertop",
  },
  {
    id: 2,
    label: "Bathroom Remodel Plumbing",
    category: "Residential",
    image: "https://images.pexels.com/photos/28479469/pexels-photo-28479469.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Modern white marble bathroom with contemporary plumbing fixtures",
  },
  {
    id: 3,
    label: "Water Heater Replacement",
    category: "Residential",
    image: "https://images.pexels.com/photos/28479466/pexels-photo-28479466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Modern laundry room featuring washer, dryer, and water heater",
  },
  {
    id: 4,
    label: "Sewer Line Repair",
    category: "Residential",
    image: "https://images.pexels.com/photos/26648949/pexels-photo-26648949.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Close-up of pipes on a concrete wall requiring repair",
  },
  {
    id: 5,
    label: "Commercial Drain Cleaning",
    category: "Commercial",
    image: "https://images.pexels.com/photos/7231784/pexels-photo-7231784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Metallic storm water drain cover with textured pattern",
  },
  {
    id: 6,
    label: "Pipe Repiping Project",
    category: "Residential",
    image: "https://images.pexels.com/photos/31085120/pexels-photo-31085120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Industrial wall with pipe and vents requiring repiping",
  },
  {
    id: 7,
    label: "Emergency Pipe Repair",
    category: "Emergency",
    image: "https://images.pexels.com/photos/12271457/pexels-photo-12271457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Close-up of a dripping faucet signaling an emergency repair",
  },
  {
    id: 8,
    label: "Tankless Water Heater Install",
    category: "Residential",
    image: "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    alt: "Steel underground heating manifolds with pressure gauges",
  },
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
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

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
