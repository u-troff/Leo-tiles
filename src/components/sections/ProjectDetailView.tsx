import Image from "next/image";
import Link from "next/link";
import type { GalleryProject } from "@/data/projects";

export default function ProjectDetailView({ project }: { project: GalleryProject }) {
  const heroImages = project.gallery.filter((g) => g.layout === "hero");
  const halfImages = project.gallery.filter((g) => g.layout === "half");
  const wideImages = project.gallery.filter((g) => g.layout === "wide");

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-end pb-24 md:pb-32 px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-charcoal-surface/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto reveal-up">
          <Link
            href="/work-gallery"
            className="inline-block font-mono text-[11px] tracking-widest uppercase text-architectural-gold mb-8 hover:text-bone-cream transition-colors"
          >
            ← Past Projects
          </Link>
          <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-6 md:w-3/4">
            {project.fullTitle}
          </h1>
          <div className="w-24 border-b border-architectural-gold mb-8" />
          <p className="font-serif text-[28px] md:text-[32px] leading-tight text-primary/90 md:w-1/2">
            {project.tagline}
          </p>
          <span className="inline-block mt-6 border border-architectural-gold text-architectural-gold font-mono text-[10px] uppercase tracking-wider px-2 py-1">
            {project.collection}
          </span>
        </div>
      </section>

      {/* Overview split */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background reveal-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 md:pr-12">
            <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] tracking-[-0.02em] text-bone-cream mb-12">
              {project.intentTitle}
            </h2>
            <p className="font-serif text-[18px] leading-7 text-on-surface-variant mb-8">
              {project.intentLead}
            </p>
            <p className="font-serif text-[18px] leading-7 text-on-surface-variant">
              {project.intentBody}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 mt-16 md:mt-0">
            <div className="bg-surface-container-high p-8 md:p-10 border-l border-architectural-gold">
              <h3 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-10">
                The Collaborative Guild
              </h3>
              <div className="space-y-8">
                {project.collaborators.map((person, i) => (
                  <div key={person.role}>
                    {i > 0 && <div className="border-b border-bone-cream/20 mb-8" />}
                    <span className="block font-mono text-[12px] tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                      {person.role}
                    </span>
                    <span className="block font-serif text-[28px] md:text-[32px] leading-tight text-bone-cream">
                      {person.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-charcoal-surface reveal-up">
        <div className="max-w-7xl mx-auto">
          {heroImages.map((img) => (
            <div key={img.caption} className="mb-12">
              <div className="relative overflow-hidden aspect-[21/9] min-h-[240px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="mt-4">
                <span className="font-mono text-[12px] font-medium tracking-widest uppercase text-on-surface-variant">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}

          {halfImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
              {halfImages.map((img) => (
                <div key={img.caption} className="flex flex-col">
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="font-mono text-[12px] font-medium tracking-widest uppercase text-on-surface-variant">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {wideImages.map((img) => (
            <div key={img.caption} className="md:w-3/4 mx-auto">
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              <div className="mt-4">
                <span className="font-mono text-[12px] font-medium tracking-widest uppercase text-on-surface-variant">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop text-center bg-background border-t border-ink-stroke reveal-up">
        <h2 className="font-serif text-[32px] md:text-[48px] text-bone-cream mb-6">
          Begin a project like this.
        </h2>
        <p className="font-serif text-[18px] text-on-surface-variant mb-10 max-w-xl mx-auto">
          Tell us about your site and we&rsquo;ll advise on collection, format, and lead time.
        </p>
        <Link
          href="/get-a-quote"
          className="inline-block bg-architectural-gold text-charcoal-surface px-12 py-5 font-mono text-[12px] font-medium tracking-widest uppercase hover:bg-bone-cream transition-colors"
        >
          Request a Consultation
        </Link>
      </section>
    </>
  );
}
