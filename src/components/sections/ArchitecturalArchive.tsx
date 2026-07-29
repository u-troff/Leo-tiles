"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  galleryProjects,
  projectFilters,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ArchitecturalArchive() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = galleryProjects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <main className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <aside className="md:col-span-3 flex flex-col gap-8 reveal-up">
          <div>
            <h3 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-6">
              Filter Projects
            </h3>
            <ul className="flex flex-col gap-0 font-serif text-[18px] leading-7">
              {projectFilters.map((item) => {
                const active = filter === item.key;
                return (
                  <li
                    key={item.key}
                    className="border-t border-architectural-gold/20 first:border-t-0 first:pt-0 pt-4"
                  >
                    <button
                      type="button"
                      onClick={() => setFilter(item.key)}
                      className={cn(
                        "w-full flex justify-between items-center group transition-colors duration-300 text-left py-1",
                        active
                          ? "text-architectural-gold"
                          : "text-bone-cream/60 hover:text-architectural-gold"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-opacity",
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filtered.length === 0 && (
            <p className="md:col-span-2 font-serif text-on-surface-variant py-20 text-center">
              No projects in this category yet.
            </p>
          )}

          {filtered.map((project, index) => {
            const spanFull = Boolean(project.featured);

            return (
              <Link
                key={project.slug}
                href={`/work-gallery/${project.slug}`}
                className={cn(
                  "group relative overflow-hidden bg-surface-container reveal-up block",
                  spanFull
                    ? "md:col-span-2 aspect-video md:aspect-[21/9]"
                    : "aspect-square md:aspect-[4/5]"
                )}
                style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes={spanFull ? "100vw" : "(max-width: 768px) 100vw, 40vw"}
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    project.category === "heritage"
                      ? "bg-gradient-to-t from-[#6B1E2B]/90 via-charcoal-surface/40 to-transparent"
                      : "bg-gradient-to-t from-charcoal-surface via-charcoal-surface/20 to-transparent"
                  )}
                />

                <div
                  className={cn(
                    "absolute bottom-0 left-0 p-6 md:p-8 w-full",
                    spanFull && "flex justify-between items-end"
                  )}
                >
                  <div>
                    <span className="inline-block border border-architectural-gold text-architectural-gold font-mono text-[10px] uppercase tracking-wider px-2 py-1 mb-3">
                      {project.collection}
                    </span>
                    <h2
                      className={cn(
                        "font-serif text-bone-cream m-0",
                        spanFull
                          ? "text-[32px] md:text-[48px] leading-tight tracking-[-0.02em]"
                          : "text-[28px] md:text-[32px] leading-tight mb-4"
                      )}
                    >
                      {project.title}
                    </h2>
                    {!spanFull && (
                      <span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-bone-cream/70 group-hover:text-architectural-gold transition-colors uppercase">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  {spanFull && (
                    <span className="hidden md:flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.1em] text-bone-cream group-hover:text-architectural-gold transition-colors uppercase">
                      View Project <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
