import Image from "next/image";

export default function AuthenticityStrip() {
  return (
    <section className="grid lg:grid-cols-[1.35fr_1fr] items-stretch bg-sand-bone">
      <div className="px-6 md:px-12 lg:px-20 py-20 lg:py-28 flex items-center">
        <p className="font-display text-3xl lg:text-[40px] leading-[1.25] text-charcoal-ash max-w-2xl">
          Handmade in Cape Town since 1975, every tile mixed, pressed and shaped by hand
          before it ever sees the kiln.
        </p>
      </div>
      <div className="relative min-h-[280px] lg:min-h-full">
        <Image
          src="/images/design/stacked-tiles.jpg"
          alt="Close-up of stacked handmade terracotta tiles"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      </div>
    </section>
  );
}
